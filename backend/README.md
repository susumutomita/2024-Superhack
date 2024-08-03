# TimelyPal Backend

This directory contains the backend components of the TimelyPal project. It includes the smart contracts, deployment scripts, and configurations necessary to deploy and interact with the blockchain-based scheduling system.

## Table of Contents

- [TimelyPal Backend](#timelypal-backend)
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

## Introduction

The TimelyPal backend is built using Foundry for developing and deploying Solidity smart contracts. These contracts handle the creation of schedule proposals, voting, and determining the final meeting time. By leveraging blockchain technology, TimelyPal ensures that all schedule data is transparent, immutable, and privacy-preserving.

## Technologies Used

- **Blockchain Platform**: Metal L2
- **Smart Contracts**: Solidity
- **Development Framework**: Foundry
- **Decentralized Storage**: IPFS

## Directory Structure

```plaintext
backend/
├── contracts/
│   └── Schedule.sol        # Smart contract for scheduling
├── scripts/
│   └── deploy.js           # Deployment script
├── src/
│   └── main.rs             # Main Rust source file (if using Foundry's native support)
├── test/
│   └── Schedule.t.sol      # Test file for the smart contract
├── .env                    # Environment variables
├── foundry.toml            # Foundry configuration file
└── README.md               # This README file
```

## Installation

### Prerequisites

- Foundry: Make sure you have Foundry installed. You can install it by running:

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
   INFURA_PROJECT_ID=<Your_Infura_Project_ID>
   ```

## Deployment

To deploy the smart contract to the blockchain, follow these steps:

1. **Compile the smart contracts**:

   ```bash
   forge build
   ```

2. **Deploy the smart contract**:

   ```bash
   forge create src/Schedule.sol:Schedule --rpc-url <Your_RPC_URL> --private-key <Your_Private_Key>
   ```

3. The deployment script (`deploy.js`) can also be used for deployment via a JavaScript runtime:

   ```bash
   node scripts/deploy.js
   ```

## Testing

To run the tests for the smart contracts, use the following command:

```bash
forge test
```

This will execute the tests defined in the `test/Schedule.t.sol` file.

## Usage

Once deployed, the smart contract can be interacted with using any Ethereum-compatible wallet or frontend application. The frontend part of the project, located in the `frontend/` directory, provides a user-friendly interface to interact with the deployed smart contract.

- **Proposing Times**: Users can propose different meeting times. These proposals are stored on the blockchain using smart contracts.
- **Voting**: Participants vote on the proposed times. Votes are recorded on the blockchain, ensuring transparency.
- **Finalizing**: The time with the most votes is selected. A notification is sent to all participants, informing them of the chosen time.

### Interacting with the Smart Contract

You can interact with the deployed smart contract using `cast`, Foundry's CLI tool:

- **Create a proposal**:

  ```bash
  cast send <Contract_Address> "createProposal(string)" "Meeting at 10 AM" --rpc-url <Your_RPC_URL> --private-key <Your_Private_Key>
  ```

- **Vote for a proposal**:

  ```bash
  cast send <Contract_Address> "vote(uint256)" 0 --rpc-url <Your_RPC_URL> --private-key <Your_Private_Key>
  ```

- **Determine the winner**:

  ```bash
  cast send <Contract_Address> "determineWinner()" --rpc-url <Your_RPC_URL> --private-key <Your_Private_Key>
  ```

## Future Prospects

- **Enhanced Features**: Plan to add more sophisticated voting mechanisms and notification systems.
- **Integration with Frontend**: Continuous integration with the frontend for a seamless user experience.

## Contributing

We welcome contributions to the TimelyPal project. Please fork the repository and submit pull requests for review. For major changes, please open an issue first to discuss what you would like to change.
