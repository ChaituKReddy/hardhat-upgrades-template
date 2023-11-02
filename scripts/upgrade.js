const { ethers, upgrades } = require("hardhat");

async function main() {
  const CounterV2 = await ethers.getContractFactory("CounterV2");
  const presale = await upgrades.upgradeProxy(
    "0x7d7785E76b22f5Ea14F6C6c713bf99959865029d",
    CounterV2
  );

  console.log(`Upgraded`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
