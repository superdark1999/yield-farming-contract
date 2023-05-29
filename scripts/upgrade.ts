import { Signer } from "ethers";
import { ethers, upgrades, network } from "hardhat";
import { getAllAddresses } from "./address/handleAddress";

let [deployer, admin, user1, user2]: Signer[] = [];

async function main() {
  const { sicboAddress, sicboNFTAddress } = getAllAddresses(
    network.config.chainId?.toString()
  );

  [deployer, admin, user1, user2] = await ethers.getSigners();

  const SicboFac = await ethers.getContractFactory("Sicbo", deployer);

  await upgrades.upgradeProxy(sicboAddress, SicboFac);

  // const SicboNftFac = await ethers.getContractFactory("SicboNFT", deployer);

  // await upgrades.upgradeProxy(sicboNFTAddress, SicboNftFac);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
