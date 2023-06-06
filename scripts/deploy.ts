import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { Signer } from "ethers";
import { ethers, upgrades, network } from "hardhat";
import {
  setAddress,
  getAddress,
  getAllAddresses,
} from "./address/handleAddress";

let [deployer, admin, user1, user2]: SignerWithAddress[] = [];

const deployStaking = async () => {
  const { faucetAddress } = getAllAddresses(network.config.chainId);
  const Fac = await ethers.getContractFactory("LockStaking");

  const staking = await upgrades.deployProxy(Fac, [faucetAddress]);

  await staking.deployed();
  setAddress("stakingAddress", staking.address, network.config.chainId);
};

const deployFaucet = async () => {
  const Faucet = await ethers.getContractFactory("FaucetToken");
  const faucet = await Faucet.deploy("faucet token", "faucet");
  await faucet.deployed();

  setAddress("faucetAddress", (faucet as any).address, network.config.chainId);
};

async function main() {
  [deployer] = await ethers.getSigners();

  await deployFaucet();
  // await deployStaking();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
