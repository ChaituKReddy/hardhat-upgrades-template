const { ethers, upgrades } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const Counter = await ethers.getContractFactory("Counter");

  const counter = await upgrades.deployProxy(Counter, [20]);

  await counter.waitForDeployment();

  console.log("Calling increment");
  await counter.increment();

  console.log("Counter deployed at address ", counter.target);
}

// // We recommend this pattern to be able to use async/await everywhere
// // and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
