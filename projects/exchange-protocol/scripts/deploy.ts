import { ethers, network, run } from "hardhat";
import config from "../config";
import { constants } from "@openzeppelin/test-helpers";

const main = async () => {
  // Get network name: hardhat, testnet or mainnet.
  const { name } = network;

  console.log("Deploying to network:", network);

  // const PancakeFactoryContract = await ethers.getContractFactory("PancakeFactory");
  // const PancakeFactory = await PancakeFactoryContract.deploy("0x0B79607841C18280623492442E8BEB47526Ba897");
  // await PancakeFactory.deployed();
  // console.log("PancakeFactory:", PancakeFactory.address);

  const PancakeRouterContract = await ethers.getContractFactory("PancakeRouter");
  const PancakeRouter = await PancakeRouterContract.deploy("0x8f4d17a90d24E72aaa5b1CD51652551f1572d0c1", "0x5300000000000000000000000000000000000004");
  await PancakeRouter.deployed();
  console.log("PancakeRouter:", PancakeRouter.address);

};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });