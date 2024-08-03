![GitHub last commit (by committer)](https://img.shields.io/github/last-commit/susumutomita/2024-Superhack)
![GitHub top language](https://img.shields.io/github/languages/top/susumutomita/2024-Superhack)
![GitHub pull requests](https://img.shields.io/github/issues-pr/susumutomita/2024-Superhack)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/susumutomita/2024-Superhack)
![GitHub repo size](https://img.shields.io/github/repo-size/susumutomita/2024-Superhack)

# TimelyPal

ETH Global Link: [TimelyPal Showcase](https://ethglobal.com/showcase/timelypal-sfbo5)

<div style="text-align: center;">
  <img src="./images/logo.png" width="200" height="200" alt="TimelyPal Logo"/>
</div>

TimelyPal is a decentralized schedule coordination platform that leverages blockchain technology to enhance transparency and reliability. Users can propose and vote on schedules, with all actions recorded immutably on the blockchain.

## Table of Contents

- [TimelyPal](#timelypal)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Images](#images)
  - [System Overview](#system-overview)
  - [Screenshots](#screenshots)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Future Prospects](#future-prospects)
  - [Contributing](#contributing)
  - [License](#license)
  - [The Team](#the-team)

## Introduction

TimelyPal is a decentralized application (dApp) designed to facilitate transparent and reliable schedule coordination. By recording all proposals and votes on the blockchain, TimelyPal ensures that the scheduling process is tamper-proof and transparent. Additionally, TimelyPal guarantees privacy as schedule information is not stored on any centralized server, but instead on a decentralized network.

## Features

- **Decentralized Schedule Proposals and Voting**: Users can propose and vote on schedules, with all actions recorded on the blockchain.
- **Transparency and Immutability**: All data is stored on the blockchain, ensuring it cannot be altered.
- **Privacy Protection**: Schedule information is not stored on any centralized server, ensuring user privacy. Utilizes Decentralized Identity (DID) for user authentication, protecting personal information.
- **Automated Notifications**: Participants are automatically notified when a schedule is finalized.

## Technologies Used

- **Blockchain Platform**: Metal L2
- **Smart Contracts**: Solidity
- **Front-end**: React
- **Back-end**: Node.js, Express
- **Database**: IPFS (InterPlanetary File System)
- **Authentication**: Decentralized Identity (DID)

## Images

<div style="text-align: center;">
  <img src="./images/schedulechain-diagram.png" width="400" height="400" alt="System Overview"/>
</div>

## System Overview

TimelyPal consists of a front-end built with React and a back-end powered by Node.js and Express. The system leverages smart contracts on the Metal L2 blockchain to handle schedule proposals and voting. IPFS is used to store detailed schedule information, ensuring data persistence and immutability. This decentralized approach ensures that no schedule information is stored on a central server, enhancing user privacy.

## Screenshots

<div style="text-align: center;">
  <img src="./images/schedulechain-screenshot.png" width="400" height="300" alt="TimelyPal Screenshot"/>
</div>

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/susumutomita/2024-Superhack
   cd timelypal
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the `backend/` directory and add necessary configurations.

   ```plaintext
   NODE_ENV=<development | production>
   ```

4. **Run the server**:
   ```bash
   npm start
   ```

## Usage

- Open your browser and navigate to `http://localhost:3000`.
- Propose new schedules, vote on existing proposals, and receive notifications when a schedule is finalized.

## Future Prospects

- **Integration with Calendar Apps**: Plan to integrate with popular calendar applications (Google Calendar, Outlook, etc.) to streamline the scheduling process.
- **Enhanced Privacy Features**: Implement advanced encryption methods to further protect user data.

## Contributing

We welcome contributions to TimelyPal. Please fork the repository and submit pull requests for review. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## The Team

- [Susumu Tomita](https://susumutomita.netlify.app/) - Full Stack Developer
