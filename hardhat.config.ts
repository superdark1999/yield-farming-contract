import * as dotenv from "dotenv";

import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
// import "hardhat-gas-reporter";
import "solidity-coverage";
import "hardhat-tracer";
import "@openzeppelin/hardhat-upgrades";

dotenv.config();

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.9",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.6.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  networks: {
    matic: {
      url: `https://apis.ankr.com/e22bfa5f5a124b9aa1f911b742f6adfe/c06bb163c3c2a10a4028959f4d82836d/polygon/full/main`,
      accounts: [
        process.env.PRIVATE_KEY_DEPLOYER!,
        process.env.PRIVATE_KEY_ADMIN!,
        process.env.PRIVATE_KEY_USER1!,
        process.env.PRIVATE_KEY_USER2!,
      ],
    },

    bsc_testnet: {
      chainId: 97,
      url: "https://data-seed-prebsc-2-s2.binance.org:8545/",
      accounts: [
        process.env.PRIVATE_KEY_DEPLOYER!,
        process.env.PRIVATE_KEY_ADMIN!,
        process.env.PRIVATE_KEY_USER1!,
        process.env.PRIVATE_KEY_USER2!,
      ],
    },

    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/7z572lXXuyfpl4wcS-faR81Oyobzb8Pj",
      accounts: [
        process.env.PRIVATE_KEY_DEPLOYER!,
        process.env.PRIVATE_KEY_ADMIN!,
        process.env.PRIVATE_KEY_USER1!,
        process.env.PRIVATE_KEY_USER2!,
      ],
    },
  },

  // gasReporter: {
  //   enabled: true,
  //   currency: "USD",
  // },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://bscscan.com/
    apiKey: "8KFSH17E4S26HYAFBGTPCA29NMNCRY4W3K",
    // apiKey: 'H73WJKKZ7PP5WGF9C11EAPU8MJKY9BNHIJ',
    // apiKey: '4FIZ8WRNU47K26M8DG3YG5ZWR29V7EKAGY',
  },
};

export default config;
