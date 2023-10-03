import { utils, Wallet } from "zksync-web3";
import * as ethers from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";
import "dotenv/config";

// An example of a deploy script that will deploy and call a simple contract.
export default async function (hre: HardhatRuntimeEnvironment) {
  console.log(`Running deploy script`);

  // Initialize the wallet.
  const wallet = new Wallet(process.env.KEY_TESTNET);

  // Create deployer object and load the artifact of the contract we want to deploy.
  const deployer = new Deployer(hre, wallet);
  // Load contract
  // const PancakeFactory = await deployer.loadArtifact("PancakeFactory");
  // const PancakeFactoryContract = await deployer.deploy(PancakeFactory, [process.env.ADDR_TESTNET]);

  // // Show the contract info.
  // console.log("PancakeFactory:", PancakeFactoryContract.address);


  const PancakeRouter = await deployer.loadArtifact("PancakeRouter");
  const PancakeRouterContract = await deployer.deploy(PancakeRouter, [/*PancakeFactoryContract.address*/'0xb759D079984eFB28B0337a46F9aaFa70809dF0Da', process.env.WETH_ZKSYNC_TESTNET_ADDR]);

  // Show the contract info.
  console.log("PancakeRouter:", PancakeRouterContract.address);


}