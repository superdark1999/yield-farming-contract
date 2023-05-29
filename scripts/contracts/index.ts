import { ethers } from "hardhat";
import { Sicbo, SicboNFT } from "../../typechain";
import { getAllAddresses } from "../address/handleAddress";

export const getContracts = async (chainId: any) => {
  const { sicboAddress, sicboNFTAddress, vrfV2ConsumerAddress } =
    getAllAddresses(chainId);

  let sicbo, sicboNFT, vrfV2Consumer;

  sicbo = (await ethers.getContractAt("Sicbo", sicboAddress)) as Sicbo;

  sicboNFT = (await ethers.getContractAt(
    "SicboNFT",
    sicboNFTAddress
  )) as SicboNFT;
  vrfV2Consumer = await ethers.getContractAt(
    "VRFv2Consumer",
    vrfV2ConsumerAddress
  );

  return { sicbo, sicboNFT, vrfV2Consumer };
};
