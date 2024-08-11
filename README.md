[![contract-ci](https://github.com/susumutomita/2024-Superhack/actions/workflows/contract_ci.yml/badge.svg?branch=main)](https://github.com/susumutomita/2024-Superhack/actions/workflows/contract_ci.yml)
![GitHub last commit (by committer)](https://img.shields.io/github/last-commit/susumutomita/2024-Superhack)
![GitHub top language](https://img.shields.io/github/languages/top/susumutomita/2024-Superhack)
![GitHub pull requests](https://img.shields.io/github/issues-pr/susumutomita/2024-Superhack)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/susumutomita/2024-Superhack)
![GitHub repo size](https://img.shields.io/github/repo-size/susumutomita/2024-Superhack)

# Onchain Senryu

ETH Global Link: [Onchain Senryu Showcase](https://ethglobal.com/showcase/onchain-senryu-sfbo5)

<div style="text-align: center;">
  <img src="./images/logo.png" width="200" height="200" alt="Onchain Senryu Logo"/>
</div>

**Onchain Senryu** is a platform that mixes the Japanese art of senryu (a type of haiku) with blockchain. Users can make, share, and vote on senryu poems. Everything is saved on the Base blockchain to keep it authentic and transparent.

## Table of Contents

- [Onchain Senryu](#onchain-senryu)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
    - [Cultural and Global Impact](#cultural-and-global-impact)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [System Overview](#system-overview)
  - [Prize Categories \& Criteria](#prize-categories--criteria)
    - [Judging Criteria](#judging-criteria)
    - [Targeted Prizes](#targeted-prizes)
  - [Screenshots](#screenshots)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Future Prospects](#future-prospects)
  - [Usage](#usage-1)
  - [Future Prospects](#future-prospects-1)
  - [Contributing](#contributing)
  - [License](#license)
  - [The Team](#the-team)

## Introduction

**Onchain Senryu** is a decentralized app where users can enjoy making senryu poems. With help from AI, users create senryu, submit them to the blockchain, and vote on the best ones. The platform uses blockchain to make sure all poems are authentic and can't be changed.

### Cultural and Global Impact

Senryu is very popular in Japan, but many people around the world don't know about it. To let more people enjoy senryu, **Onchain Senryu** uses AI to help users from different cultures create senryu poems easily. This way, everyone can have fun with senryu, no matter where they are from.

In Japan, there's a popular contest called **"[サラリーマン川柳 (Salaryman Senryu)](https://event.dai-ichi-life.co.jp/company/senryu/)"** where people make funny and clever poems about their daily lives. I hope that **Onchain Senryu** will inspire people from all over the world to create and share senryu that reflects their own lives.

## Features

- **AI-Assisted Senryu Creation**: Create senryu poems with the help of AI.
- **Blockchain-Backed Submission**: Submit your senryu to the Base blockchain, so it stays safe and real.
- **Community Voting**: Vote on your favorite senryu, with the results saved on the blockchain.
- **World ID Integration**: Use World ID for secure login and bot prevention.
- **Real-Time Vote Ranking**: See the latest rankings based on votes, powered by Goldsky.

## Technologies Used

- **Blockchain Platform**: Base - I use Base for my smart contracts, so all senryu submissions and votes are saved safely on the blockchain.
- **Smart Contracts**: Solidity - My smart contracts handle the submission and voting process.
- **Front-end**: Next.js - This makes the platform easy to use and navigate.
- **AI Integration**: Groq API - Helps users create senryu poems based on their ideas.
- **Authentication**: World ID - Keeps my users safe by preventing bots from joining.
- **Data Management**: Goldsky - Helps me keep the senryu rankings up to date with real-time data.

## System Overview

**Onchain Senryu** uses Next.js for the front-end and Foundry for the blockchain back-end. Smart contracts on the Base blockchain handle the senryu submissions and voting. AI, through the Groq API, helps users create senryu. Goldsky's tools make sure the vote rankings are always up to date, so users can see the latest results.

## Prize Categories & Criteria

### Judging Criteria

My project aims to meet the following five criteria:

1. **Technicality**:
   I have combined several advanced technologies, including blockchain, AI, and real-time data management to build this platform. The smart contracts on the Base blockchain securely handle all submissions and votes, while AI assists in generating senryu poems. Goldsky's real-time data tools ensure that vote counts are always up to date. This combination of technologies provides a smooth and reliable user experience.

2. **Originality**:
   Onchain Senryu brings the traditional Japanese art of senryu into the digital age, making it accessible to a global audience. While senryu is well-known in Japan, it is less familiar worldwide. By using AI to help users create senryu, I have created a new way for people from different cultures to engage with this unique form of poetry. This blend of old and new is a fresh approach to cultural preservation and creativity.

3. **Practicality**:
   My platform is fully functional and live on the Base blockchain. Users can create senryu, submit them to the blockchain, and participate in voting—all in real-time. The platform is stable and ready to be used by a wide audience, ensuring that all interactions are secure and transparent.

4. **Usability (UI/UX/DX)**:
   I have focused on making the platform as easy to use as possible. The interface is clean and intuitive, making it simple for users to create, submit, and vote on senryu. The integration of AI and blockchain is seamless, allowing users to focus on creativity rather than technology. The overall design ensures that even those new to blockchain can use the platform without difficulty.

5. **WOW factor**:
   Onchain Senryu stands out by bringing together ancient Japanese culture and cutting-edge Web3 technology. This project not only preserves a traditional art form but also opens it up to a global audience through the use of AI and blockchain. The unique combination of cultural heritage and modern technology provides a fresh and engaging experience that will appeal to both poetry lovers and tech enthusiasts alike.

### Targeted Prizes

**Base Prizes**
- **Best apps built for creators on Base**: My platform lets people be creative with senryu, using blockchain to protect their work.
- **Best apps built for social on Base**: I focus on user interaction through voting and sharing, which fits the social category.

**Worldcoin Prizes**
- **Best Use of World ID**: I use World ID to keep my platform secure, making sure only real people can create and vote on senryu.
- **Pool Prize**: By using World ID for user verification, I also qualify for the Worldcoin Pool Prize.

**Goldsky Prizes**
- **Best Use of Goldsky**: I use Goldsky to keep my senryu rankings up to date, so users always see the latest results.

## Screenshots

<img src=./images/signin.png width=100%>
<img src=./images/worldidauthentication.png width=50%>
<img src=./images/toppage.png width=50%>
<img src=./images/createsenryu.png width=50%>
<img src=./images/explore.png width=50%>
<img src=./images/voteresult.png width=50%>

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/susumutomita/2024-Superhack
   ```

2. **Install dependencies**:

   ```bash
   make install_all
   ```

3. **Set up environment variables**:
   Set environment variables below

   ```plaintext
   NEXT_PUBLIC_WLD_APP_ID=<Your World ID App ID>
   NEXT_PUBLIC_WLD_ACTION=<Your World ID Action>
   GROQ_API_KEY=<Groq API key>
   ```

4. **Run the development server**:
   ```bash
   make start
   ```

## Usage

- Open your browser and go to `http://localhost:3000`.
- Create senryu poems, submit them to the blockchain, and vote on your favorites in the community.

## Future Prospects

- **Multilingual Support**: I want to let people create and share senryu in many languages.
- **Enhanced AI Features**: I plan to add more AI tools to

I apologize, it seems there was a system interruption. Let me continue from where I left off:

---

## Usage

- Open your browser and go to `http://localhost:3000`.
- Create senryu poems, submit them to the blockchain, and vote on your favorites in the community.

## Future Prospects

- **Multilingual Support**: I want to let people create and share senryu in many languages.
- **Enhanced AI Features**: I plan to add more AI tools to help users create better senryu.
- **Visual Content Integration**: Users may be able to add images or videos to their senryu.
- **Global Competitions**: I hope to host global senryu contests with prizes.

## Contributing

I welcome contributions to Onchain Senryu. Please fork the repository and submit pull requests for review. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## The Team

- [Susumu Tomita](https://susumutomita.netlify.app/) - Full Stack Developer
