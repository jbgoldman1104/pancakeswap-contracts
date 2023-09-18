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
  const CakeToken = await deployer.loadArtifact("CakeToken");
  const CakeTokenContract = await deployer.deploy(CakeToken, []);

  // Show the contract info.
  console.log("CakeToken:", CakeTokenContract.address);


  const SyrupBar = await deployer.loadArtifact("SyrupBar");
  const SyrupBarContract = await deployer.deploy(SyrupBar, [CakeTokenContract.address]);

  // Show the contract info.
  console.log("SyrupBar:", SyrupBarContract.address);

  const MasterChef = await deployer.loadArtifact("MasterChef");
  const MasterChefContract = await deployer.deploy(MasterChef, [CakeTokenContract.address, SyrupBarContract.address, 
                process.env.ADDR_TESTNET, process.env.CAKE_PER_BLOCK,  process.env.START_BLOCK]);

  // Show the contract info.
  console.log("MasterChef:", MasterChefContract.address);

  


}