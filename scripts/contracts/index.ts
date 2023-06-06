import { ethers } from "hardhat";
import { FaucetToken, LockStaking } from "../../typechain";
import { getAllAddresses } from "../address/handleAddress";

export const getContracts = async (chainId: any) => {
  const { faucetAddress, stakingAddress } = getAllAddresses(chainId);

  let faucetToken, lockStaking;

  faucetToken = (await ethers.getContractAt(
    "FaucetToken",
    faucetAddress
  )) as FaucetToken;

  lockStaking = (await ethers.getContractAt(
    "LockStaking",
    stakingAddress
  )) as LockStaking;

  return { faucetToken, lockStaking };
};
