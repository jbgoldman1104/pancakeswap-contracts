import { ethers, network, run } from "hardhat";


const main = async () => {
  // Get network name: hardhat, testnet or mainnet.
  const { name } = network;

  console.log("Deploying to network:", network);

  // const CakeToken = await ethers.getContractFactory("CakeToken");
  // const CakeTokenContract = await CakeToken.deploy();
  // await CakeTokenContract.deployed();
  // console.log("CakeToken:", CakeTokenContract.address);

  // const SyrupBar = await ethers.getContractFactory("SyrupBar");
  // const SyrupBarContract = await SyrupBar.deploy(CakeTokenContract.address);
  // await SyrupBarContract.deployed();
  // console.log("SyrupBar:", SyrupBarContract.address);

  const MasterChef = await ethers.getContractFactory("MasterChef");
  // const MasterChefContract = await MasterChef.deploy(CakeTokenContract.address, SyrupBarContract.address, 
  const MasterChefContract = await MasterChef.deploy('0x6542F0f0831dCF256ceb1bd2b4E4A2C52bA3e707', '0x81ddaED1A0f48fB9b72Cbb6D41B9A6C82c19541F', 
    process.env.ADDR_TESTNET, process.env.CAKE_PER_BLOCK,  process.env.START_BLOCK);
  await MasterChefContract.deployed();
  console.log("MasterChef:", MasterChefContract.address);

};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
