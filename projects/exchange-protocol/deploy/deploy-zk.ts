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
  const PancakeFactory = await deployer.loadArtifact("PancakeFactory");
  const PancakeFactoryContract = await deployer.deploy(PancakeFactory, ["0x0B79607841C18280623492442E8BEB47526Ba897"]);

  // Show the contract info.
  console.log("PancakeFactory:", PancakeFactoryContract.address);


  const PancakeRouter = await deployer.loadArtifact("PancakeRouter");
  const PancakeRouterContract = await deployer.deploy(PancakeRouter, [PancakeFactoryContract.address, "0x20b28B1e4665FFf290650586ad76E977EAb90c5D"]);

  // Show the contract info.
  console.log("PancakeRouter:", PancakeRouterContract.address);


}