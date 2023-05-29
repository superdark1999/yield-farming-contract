import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { Signer } from "ethers";
import { ethers, upgrades, network } from "hardhat";
import {
  setAddress,
  getAddress,
  getAllAddresses,
} from "./address/handleAddress";

let [deployer, admin, user1, user2]: SignerWithAddress[] = [];

const deploySicbo = async () => {
  const { sicboNFTAddress, vrfV2ConsumerAddress } = getAllAddresses(
    network.config.chainId
  );
  const Fac = await ethers.getContractFactory("Sicbo");

  const sicbo = await upgrades.deployProxy(Fac, [
    sicboNFTAddress,
    vrfV2ConsumerAddress,
  ]);

  await sicbo.deployed();
  setAddress("sicboAddress", sicbo.address, network.config.chainId);
};

async function main() {
  [deployer] = await ethers.getSigners();

  await deploySicbo();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
