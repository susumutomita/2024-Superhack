// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract TimelyPal {
    struct Proposal {
        uint256 id;
        string description;
        uint256 voteCount;
    }

    Proposal[] public proposals;
    mapping(address => uint256) public votes;
    address public owner;
    uint256 public winningProposalId;

    constructor() {
        owner = msg.sender;
    }

    function createProposal(string memory description) public {
        proposals.push(
            Proposal({
                id: proposals.length,
                description: description,
                voteCount: 0
            })
        );
    }

    function vote(uint256 proposalId) public {
        require(proposals.length > proposalId, "Proposal does not exist");
        require(votes[msg.sender] == 0, "You have already voted");

        proposals[proposalId].voteCount += 1;
        votes[msg.sender] = proposalId + 1; // Store proposalId + 1 to avoid default value of 0
    }

    function determineWinner() public {
        require(msg.sender == owner, "Only owner can determine the winner");

        uint256 maxVotes = 0;
        for (uint256 i = 0; i < proposals.length; i++) {
            if (proposals[i].voteCount > maxVotes) {
                maxVotes = proposals[i].voteCount;
                winningProposalId = i;
            }
        }
    }

    function getWinningProposal() public view returns (string memory) {
        return proposals[winningProposalId].description;
    }
}
