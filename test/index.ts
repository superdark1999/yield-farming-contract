import { getContractFactory } from "@nomiclabs/hardhat-ethers/types";
import { deploy } from "@openzeppelin/hardhat-upgrades/dist/utils";
import { expect } from "chai";
import { error } from "console";
import { Signer } from "ethers";
import { ethers, network, upgrades } from "hardhat";
import { Sicbo, SicboNFT } from "../typechain";
import { createRandomTable } from "./../config/wiki";

const batchTxsToBlock = async (callback: any) => {
  await network.provider.send("evm_setAutomine", [false]);
  await callback();
  await network.provider.request({
    method: "evm_mine",
  });
  await network.provider.send("evm_setAutomine", [true]);
};

const increaseTime = async (ms: number, forViewFunction: boolean) => {
  await network.provider.send("evm_increaseTime", [
    forViewFunction ? ms : ms - 1,
  ]);
  await network.provider.send("evm_mine");
};

const randomTable = createRandomTable([900, 50, 30, 19, 1]);

let signers: Signer[];
let sicbo: Sicbo;
let sicboNft: SicboNFT;

const users: string[] = [];

let deployer: Signer;
let admin: Signer;

const UINT_MAX = ethers.constants.MaxUint256;

const GAME_ADMIN = ethers.utils.keccak256(
  ethers.utils.toUtf8Bytes("GAME_ADMIN")
);

const PRICE_UPDATER = ethers.utils.keccak256(
  ethers.utils.toUtf8Bytes("PRICE_UPDATER")
);

const setupAccount = async () => {
  signers = await ethers.getSigners();
  [deployer, admin] = signers.slice(signers.length - 2);
  for (let i = 1; i <= 15; i++) {
    users[i] = await signers[i].getAddress();
  }
};
describe("sicbo", () => {
  it("Deploy", async () => {
    signers = await ethers.getSigners();

    for (let i = 1; i < 15; i++) {
      users[i] = await signers[i].getAddress();
    }

    deployer = signers[19];

    const SicboNftFac = await (
      await ethers.getContractFactory("SicboNFT")
    ).connect(deployer);

    sicboNft = (await upgrades.deployProxy(SicboNftFac, [
      "Sicbo",
      "SICBO",
      10000,
    ])) as SicboNFT;

    const SicboFac = await (
      await ethers.getContractFactory("Sicbo")
    ).connect(deployer);

    sicbo = (await upgrades.deployProxy(SicboFac, [
      sicboNft.address,
      "0x65fe201AE4e189206D785a8319129fE3D7526a91",
    ])) as Sicbo;
  });

  it("Setup", async () => {
    await sicboNft.setSicboContract(sicbo.address);

    await sicbo.setPrices([
      ethers.utils.parseEther("1"),
      ethers.utils.parseEther("2"),
    ]);
  });
  it("Play with 4 nft", async () => {
    await sicboNft.connect(deployer).mint(users[1]);

    await sicboNft.connect(deployer).mint(users[1]);

    await sicboNft.connect(deployer).mint(users[1]);

    await sicboNft.connect(deployer).mint(users[1]);

    //  play 3 times
    for (let i = 0; i <= 2; i++) {
      await sicbo.connect(signers[0]).play(false, 0, {
        value: ethers.utils.parseEther("1"),
      });

      await sicbo.connect(deployer).endRound(25);
    }
  });

  it("play with 5 nft", async () => {
    await sicboNft.connect(deployer).mint(users[1]);
    await sicboNft.connect(deployer).mint(users[2]);

    //  play 2 times
    for (let i = 0; i <= 1; i++) {
      await sicbo.connect(signers[1]).play(false, 0, {
        value: ethers.utils.parseEther("1"),
      });

      await sicbo.connect(deployer).endRound(25);
    }
    console.log(await sicbo.devAccAmount());
    // reward:  116666666666666660
    // reward:  8333333333333332
    // console.log("user1", await sicbo.nftHolders(users[1]));
  });

  it("transfer nft from user1 to user2", async () => {
    await sicboNft.connect(signers[1]).setApprovalForAll(users[2], true);
    await sicboNft.connect(signers[1]).transferFrom(users[1], users[2], 3);

    //  play 2 times
    for (let i = 0; i <= 1; i++) {
      await sicbo.connect(signers[1]).play(false, 0, {
        value: ethers.utils.parseEther("1"),
      });

      await sicbo.connect(deployer).endRound(25);
    }

    await sicbo.connect(signers[1]).claim();

    await sicbo.connect(signers[2]).claim();
  });
});
