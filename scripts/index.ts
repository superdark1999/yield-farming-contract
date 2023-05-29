import { Signer } from "ethers";
import { ethers, network } from "hardhat";
import { getAllAddresses } from "./address/handleAddress";
import { getContracts } from "./contracts";

let deployer: Signer, admin: Signer, signer1: Signer, signer2: Signer;

function randomInteger(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const GAME_ADMIN = ethers.utils.keccak256(
  ethers.utils.toUtf8Bytes("GAME_ADMIN")
);

// setSicboContract ( nft )
// addAdmin ( nft )
// setPrices ( sicbo )

const main = async () => {
  [deployer, admin, signer1, signer2] = await ethers.getSigners();
  const { sicboAddress } = getAllAddresses(network.config.chainId);
  const { sicbo, sicboNFT, vrfV2Consumer } = await getContracts(
    network.config.chainId?.toString()
  );

  await (await sicbo.endRound(25)).wait();
};

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
