# Onchain Senryu Subgraph

This directory contains the subgraph components for the **Onchain Senryu** project, enabling real-time tracking and ranking of senryu submissions and votes on the Base blockchain.

## Table of Contents

- [Onchain Senryu Subgraph](#onchain-senryu-subgraph)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Technologies Used](#technologies-used)
  - [Installation](#installation)
    - [Prerequisites](#prerequisites)
    - [Steps](#steps)
  - [Generating ABIs](#generating-abis)
  - [Code Generation](#code-generation)
  - [Building the Subgraph](#building-the-subgraph)
  - [Deploying the Subgraph](#deploying-the-subgraph)
  - [Updating the Subgraph](#updating-the-subgraph)
  - [Troubleshooting](#troubleshooting)

## Introduction

The **Onchain Senryu** subgraph indexes and tracks senryu submissions and votes on the Base blockchain. This subgraph allows for real-time query capabilities, enabling users to see the most up-to-date results and rankings of senryus.

## Technologies Used

- **Blockchain Platform**: Base
- **Subgraph**: Goldsky
- **GraphQL**: Used for querying indexed data

## Installation

### Prerequisites

### Steps

1. **Install dependencies**:

   ```bash
   npm install
   ```

## Generating ABIs

Ensure you have the latest ABIs for your smart contracts. ABIs are crucial for mapping contract events to the subgraph.

1. **Generate ABI files**:

   If you're using Foundry or another tool, compile your contracts to generate the ABIs:

   ```bash
   forge build
   ```

2. **Update ABIs**:

   Copy the generated ABI files to the `backend/goldsky/abis/` directory.

## Code Generation

Generate the necessary AssemblyScript types for the subgraph:

```bash
npm run codegen
```

This command processes the GraphQL schema and mapping files to generate the appropriate code for your subgraph.

## Building the Subgraph

Compile the subgraph to ensure it’s ready for deployment:

```bash
npm run build
```

This step validates the subgraph and prepares it for deployment.

## Deploying the Subgraph

Deploy the subgraph to Goldsky. Ensure to update the version in the deployment command if necessary:

```bash
npm run deploy
```

Make sure the version number (`1.0.2`) in the `deploy` script in `package.json` is updated to match the current version you are deploying.

```json
"scripts": {
  "codegen": "graph codegen",
  "build": "graph build",
  "deploy": "goldsky subgraph deploy onchain-senryu/1.0.3 --path ."
}
```

Replace `1.0.3` with the current version you're deploying.

## Updating the Subgraph

When updating the smart contracts or making significant changes, you need to update several components:

1. **Update Contract Address and ABI**:
   - In `backend/goldsky/subgraph.yaml`, update the `address` and `abi` fields to reflect the new contract deployment.
   - Update the `startBlock` if needed, based on the new contract deployment block.

   Example:
   ```yaml
   source:
     address: "0xNewContractAddressHere"
     abi: SenryuGame
     startBlock: 1234567
   ```

   - In `backend/goldsky/config/base-sepolia.json`, update the `address` and `startBlock` fields similarly.

2. **Replace ABI File**:
   - Replace the ABI file at `backend/goldsky/abis/SenryuGame.json` with the new ABI.

3. **Update Frontend API Endpoint**:
   - In `frontend/src/pages/api/get-senryu-results.ts`, update the `GOLDSKY_API_URL` or its default value to point to the correct subgraph version or deployment.

   Example:
   ```typescript
   const response = await fetch(
     process.env.GOLDSKY_API_URL ||
       "https://api.goldsky.com/api/public/project_newSubgraphId/subgraphs/onchain-senryu/1.0.3/gn",
   );
   ```

   Replace `1.0.3` with the version you're currently using.

4. **Rebuild and Redeploy**:
   - Run `yarn build` or `npm run build` again to ensure all changes are integrated.
   - Deploy the updated subgraph using `yarn deploy` or `npm run deploy`.

## Troubleshooting

- **Common Issues**:
  - Ensure ABI files are correct and match the deployed contract addresses.
  - Verify your Goldsky API key and other environment variables are correctly set.

- **Debugging**:
  - Use the `--log-level debug` flag during deployment for more detailed logs.
  - Monitor the subgraph status on the Goldsky dashboard to ensure it is syncing correctly.
