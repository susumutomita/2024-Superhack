![GitHub last commit (by committer)](https://img.shields.io/github/last-commit/susumutomita/2024-Superhack)
![GitHub top language](https://img.shields.io/github/languages/top/susumutomita/2024-Superhack)
![GitHub pull requests](https://img.shields.io/github/issues-pr/susumutomita/2024-Superhack)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/susumutomita/2024-Superhack)
![GitHub repo size](https://img.shields.io/github/repo-size/susumutomita/2024-Superhack)

# Drink & Discover World

ETH Global Link: [Drink & Discover World Showcase](https://ethglobal.com/showcase/drink-and-discoverworld-sfbo5)

<div style="text-align: center;">
  <img src="./images/logo.png" width="200" height="200" alt="Drink & Discover World Logo"/>
</div>

Drink & Discover World is an innovative platform that combines the unique drinking cultures of various countries with blockchain technology. Users can schedule and join virtual drinking events, participate in traditional and modern drinking games, and enjoy a transparent, privacy-focused experience. Our mission is to foster cultural exchange and international understanding through the shared experience of social drinking.

## Table of Contents

- [Drink \& Discover World](#drink--discover-world)
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

Drink & Discover World is a decentralized application (dApp) designed to facilitate cultural exchange through virtual drinking events. Users can organize and join drinking parties, participate in traditional drinking games like Senryu (Japanese poetry) competitions, and benefit from a transparent and privacy-focused experience provided by blockchain technology. This platform aims to introduce and celebrate various global drinking cultures, encouraging mutual understanding and appreciation.

## Features

- **Global Drinking Event Scheduler**: Organize and schedule virtual drinking events with participants from around the world.
- **Interactive Drinking Games**: Participate in traditional and modern drinking games from different cultures, such as Senryu competitions, quizzes, and more.
- **Real-time Voting**: Conduct real-time voting on games and activities, recorded on the blockchain for transparency and fairness.
- **Reward System**: Earn tokens and NFTs based on the popularity of your contributions.
- **Crypto Payments**: Automate payments and bill splitting using smart contracts, supporting both "warikan" (equal split) and "keisha wari" (proportional split based on age or rank).
- **World ID Integration**: Secure user authentication and bot prevention using World ID.

## Technologies Used

- **Blockchain Platform**: Metal L2
- **Smart Contracts**: Solidity
- **Front-end**: React
- **Back-end**: Node.js, Express
- **Database**: IPFS (InterPlanetary File System)
- **Authentication**: World ID

## Images

<div style="text-align: center;">
  <img src="./images/drink-discover-world-diagram.png" width="400" height="400" alt="System Overview"/>
</div>

## System Overview

Drink & Discover World consists of a front-end built with React and a back-end powered by Node.js and Express. The system leverages smart contracts on the Metal L2 blockchain to handle event scheduling, game participation, voting, and payments. IPFS is used to store detailed event and game information, ensuring data persistence and immutability. This decentralized approach ensures that no sensitive information is stored on a central server, enhancing user privacy.

## Screenshots

<div style="text-align: center;">
  <img src="./images/drink-discover-world-screenshot.png" width="400" height="300" alt="Drink & Discover World Screenshot"/>
</div>

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/susumutomita/2024-Superhack
   cd drink-discover-world
   ```

2. **Install dependencies**:
   ```bash
   npm install
   cd client && npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the `backend/` directory and add necessary configurations.

   ```plaintext
   REACT_APP_CONTRACT_ADDRESS=<Your Contract Address>
   OPENAI_API_KEY=<Your OpenAI API Key>
   WORLD_ID_API_KEY=<Your World ID API Key>
   NODE_ENV=<development | production>
   ```

4. **Run the server**:
   ```bash
   npm run start
   ```

## Usage

- Open your browser and navigate to `http://localhost:3000`.
- Organize virtual drinking events, participate in interactive drinking games, vote in real-time, and automate payments.

## Future Prospects

- **Expansion of Partner Businesses**: Increase the number of partner businesses offering rewards.
- **Global Competitions**: Host global competitions with higher stakes and bigger rewards.
- **Enhanced User Experience**: Improve the UI/UX based on user feedback.
- **Cultural Content Expansion**: Add more content about different drinking cultures and social customs worldwide.

## Contributing

We welcome contributions to Drink & Discover World. Please fork the repository and submit pull requests for review. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## The Team

- [Susumu Tomita](https://susumutomita.netlify.app/) - Full Stack Developer
```
