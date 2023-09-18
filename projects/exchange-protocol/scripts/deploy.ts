import { ethers, network, run } from "hardhat";
import config from "../config";


const main = async () => {
  // Get network name: hardhat, testnet or mainnet.
  const { name } = network;

  console.log("Deploying to network:", network);

  const PancakeFactoryContract = await ethers.getContractFactory("PancakeFactory");
  const PancakeFactory = await PancakeFactoryContract.deploy(process.env.ADDR_TESTNET);
  await PancakeFactory.deployed();
  console.log("PancakeFactory:", PancakeFactory.address);

  const PancakeRouterContract = await ethers.getContractFactory("PancakeRouter");
  const PancakeRouter = await PancakeRouterContract.deploy(PancakeFactory.address, process.env.WETH_ADDR);
  await PancakeRouter.deployed();
  console.log("PancakeRouter:", PancakeRouter.address);

};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
