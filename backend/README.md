# Onchain Senryu Backend

This directory contains the backend components of the **Onchain Senryu** project. It includes the smart contracts, deployment scripts, and configurations necessary to deploy and interact with the blockchain-based senryu platform.

## Table of Contents

- [Onchain Senryu Backend](#onchain-senryu-backend)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Technologies Used](#technologies-used)
  - [Directory Structure](#directory-structure)
  - [Installation](#installation)
    - [Prerequisites](#prerequisites)
    - [Steps](#steps)
  - [Deployment](#deployment)
  - [Testing](#testing)
  - [Usage](#usage)
    - [Interacting with the Smart Contract](#interacting-with-the-smart-contract)
  - [Future Prospects](#future-prospects)
  - [Contributing](#contributing)
  - [License](#license)

## Introduction

The **Onchain Senryu** backend is built using Foundry for developing and deploying Solidity smart contracts. These contracts handle the submission and voting of senryu poems on the Base blockchain. By leveraging blockchain technology, **Onchain Senryu** ensures that all data is transparent, immutable, and verifiable.

## Technologies Used

- **Blockchain Platform**: Base
- **Smart Contracts**: Solidity
- **Development Framework**: Foundry

## Directory Structure

```plaintext
backend/
├── contracts/
│   └── SenryuGame.sol           # Smart contract for senryu submission and voting
├── scripts/
│   └── deploy_SenryuGame.s.sol  # Deployment script
├── test/
│   └── SenryuGame.t.sol         # Test file for the smart contract
├── .env                         # Environment variables
├── foundry.toml                 # Foundry configuration file
└── README.md                    # This README file
```

## Installation

### Prerequisites

- **Foundry**: Make sure you have Foundry installed. You can install it by running:

  ```bash
  curl -L https://foundry.paradigm.xyz | bash
  foundryup
  ```

### Steps

1. **Clone the repository**:

   ```bash
   git clone https://github.com/susumutomita/2024-Superhack
   cd backend
   ```

2. **Install dependencies**:

   ```bash
   forge install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the `backend/` directory and add the necessary configurations:

   ```plaintext
   PRIVATE_KEY=<Your_Private_Key>
   RPC_URL=<Your_RPC_URL>
   YOUR_ADDRESS=<Your_Wallet_Address>
   ```

## Deployment

To deploy the smart contract to the blockchain, follow these steps:

1. **Compile the smart contracts**:

   ```bash
   forge build
   ```

2. **Deploy the smart contract**:

   ```shell
   forge script script/deploy_SenryuGame.s.sol:SenryuGameScript --rpc-url $RPC_URL --broadcast --sender $YOUR_ADDRESS --private-key $PRIVATE_KEY
   ```

## Testing

To run the tests for the smart contracts, use the following command:

```bash
forge test
```

This will execute the tests defined in the `test/SenryuGame.t.sol` file.

## Usage

Once deployed, the smart contract can be interacted with using any Ethereum-compatible wallet or frontend application. The frontend part of the project, located in the `frontend/` directory, provides a user-friendly interface to interact with the deployed smart contract.

- **Submitting Senryus**: Users can submit their senryu poems. These submissions are stored on the blockchain using smart contracts.
- **Voting**: Participants can vote for their favorite senryus. Votes are recorded on the blockchain, ensuring transparency.
- **Displaying Results**: The senryu with the most votes is displayed. Users can see the results in real-time.

### Interacting with the Smart Contract

You can interact with the deployed smart contract using `cast`, Foundry's CLI tool:

- **Submit a senryu**:

  ```bash
  cast send <Contract_Address> "submitSenryu(string)" "This is a senryu" --rpc-url <Your_RPC_URL> --private-key <Your_Private_Key>
  ```

- **Vote for a senryu**:

  ```bash
  cast send <Contract_Address> "vote(uint256)" 0 --rpc-url <Your_RPC_URL> --private-key <Your_Private_Key>
  ```

## Future Prospects

- **Enhanced Voting Mechanisms**: Explore more sophisticated voting and ranking algorithms for senryu poems.
- **Multilingual Support**: Add support for creating and interacting with senryu in multiple languages.

## Contributing

We welcome contributions to the **Onchain Senryu** project. Please fork the repository and submit pull requests for review. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License. See the [LICENSE](../LICENSE) file for details.
