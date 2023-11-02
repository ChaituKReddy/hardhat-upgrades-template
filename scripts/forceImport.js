const { ethers, upgrades } = require("hardhat");

async function main() {
  const Counter = await ethers.getContractFactory("CounterV2");
  await upgrades.forceImport(
    "0x7d7785E76b22f5Ea14F6C6c713bf99959865029d",
    Counter,
    {
      kind: "transparent",
    }
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
