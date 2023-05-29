import { Signer } from "ethers";
import { ethers, network } from "hardhat";
import { getContracts } from "../contracts";
import config from "../../hardhat.config";
import { getAllAddresses } from "../address/handleAddress";

let deployer: Signer,
  admin: Signer,
  signer1: Signer,
  signer2: Signer,
  signer3: Signer;

const UINT_MAX = ethers.constants.MaxUint256;

const setAdmin = async () => {
  const { sicboAddress } = getAllAddresses(network.config.chainId);
  const { sicboNFT } = await getContracts(network.config.chainId);

  await sicboNFT?.setSicboContract(sicboAddress);
};

const main = async () => {
  [deployer, admin, signer1, signer2, signer3] = await ethers.getSigners();

  await setAdmin();
};

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
