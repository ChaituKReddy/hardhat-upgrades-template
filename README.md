# Hardhat Upgradeable Contracts Template

## Description

This project serves as a boilerplate codebase for developing, deploying, and managing upgradeable smart contracts using Hardhat. It is designed to streamline the setup process and allow developers to focus on building their unique business logic on top of a solid and tested foundation.

## Features

- Pre-configured Hardhat environment.
- Integrated upgradeable smart contract patterns.
- Script for seamless deployment and upgrading of contracts.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js v12.x or later installed.
- Yarn or npm for managing packages.
- A basic understanding of Ethereum smart contracts and the Hardhat development environment.

## Installation

To install the necessary dependencies, follow these steps:

```bash
git clone https://github.com/ChaituKReddy/hardhat-upgrades-template
cd hardhat-upgrades-template
npm install
```

## Configuration

1. Set up your `.env` file with the necessary environment variables:

```ini
PRIVATE_KEY = "your-wallet-private-key";
MUMBAI_RPC_URL = "your-infura-api-key";
ETHERSCAN_API_KEY = "your-etherscan=api-key";
```

2. Configure the `hardhat.config.js` with the desired network settings.

## Usage

To compile the contracts, run:

```bash
npx hardhat compile
```

To run tests:

```bash
npx hardhat test
```

To deploy contracts, run:

```bash
npx hardhat run scripts/deploy.js --network <network-name>
```

Replace <network-name> with the desired network as configured in hardhat.config.js.

## Upgrading Contracts

To upgrade an existing contract, follow these steps:

1. Make changes to your contract code.
2. Compile the new contract code.
3. Run the upgrade script:

```bash
npx hardhat run scripts/upgrade.js --network <network-name>
```

#### Ensure that you've tested the upgrade on testnets before deploying to mainnet.

## Contributing

Contributions to this boilerplate are welcome. Please ensure that your PRs are detailed with what changes have been made and under what circumstances it would be useful.

## License

This project is licensed under the MIT - see the LICENSE file for details.
