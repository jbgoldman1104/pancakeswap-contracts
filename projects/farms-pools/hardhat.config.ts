import type { HardhatUserConfig, NetworkUserConfig } from "hardhat/types";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-web3";
// import "@nomiclabs/hardhat-truffle5";
import "hardhat-abi-exporter";
import "hardhat-contract-sizer";
import "solidity-coverage";
import "dotenv/config";
import "@matterlabs/hardhat-zksync-deploy";
import "@matterlabs/hardhat-zksync-solc";

const zksyncTestnet: NetworkUserConfig = {
  url: "https://testnet.era.zksync.dev",
  chainId: 280,
  accounts: [process.env.KEY_TESTNET!],
  ethNetwork: "goerli", // or a Goerli RPC endpoint from Infura/Alchemy/Chainstack etc.
  zksync: true,
};

const scrollTestnet: NetworkUserConfig = {
  url: "https://sepolia-rpc.scroll.io",
  chainId: 534351,
  accounts: [process.env.KEY_TESTNET!],
  zksync: false,
};

const bscMainnet: NetworkUserConfig = {
  url: "https://bsc-dataseed.binance.org/",
  chainId: 56,
  accounts: [process.env.KEY_MAINNET!],
};

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  etherscan: {
    apiKey: {
      ScrollTestnet: "Y44ITGUDCEFWBC32Q69M5JKTMRT56Z9W7S",
      ZksyncTestnet: "Q2KW9VJ5TWJZM1HSUY1HTWKHHUT864HTV7",
    },
    customChains: [
      {
        network: "ScrollTestnet",
        chainId: 534351,
        urls: {
          apiURL: "https://sepolia-blockscout.scroll.io/api",
          browserURL: "https://sepolia-blockscout.scroll.io/",
          // apiURL: "https://api-sepolia.scrollscan.dev/api",
          // browserURL: "https://sepolia.scrollscan.dev/",
        },
      },
      {
        network: "ZksyncTestnet",
        chainId: 280,
        urls: {
          apiURL: "https://zksync2-testnet.zkscan.io/api",
          browserURL: "https://zksync2-testnet.zkscan.io/",
        },
      },
    ],
  },
  networks: {
    hardhat: {},
    scrolltestnet: scrollTestnet,
    zksynctestnet: zksyncTestnet,
    // mainnet: bscMainnet,
  },
  solidity: {
    compilers: [
      {
        version: "0.8.4",
        settings: {
          optimizer: {
            enabled: true,
            runs: 99999,
          },
        },
      },
      {
        version: "0.6.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 99999,
          },
        },
      },
      {
        version: "0.6.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 99999,
          },
        },
      },
      {
        version: "0.5.16",
        settings: {
          optimizer: {
            enabled: true,
            runs: 99999,
          },
        },
      },
      {
        version: "0.4.18",
        settings: {
          optimizer: {
            enabled: true,
            runs: 99999,
          },
        },
      },
    ],
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  abiExporter: {
    path: "./data/abi",
    clear: true,
    flat: false,
  },
};

export default config;
