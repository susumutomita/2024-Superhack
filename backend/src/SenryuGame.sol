// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract SenryuGame {
    struct Senryu {
        uint256 id;
        string content;
        address author;
        uint256 voteCount;
    }

    struct Vote {
        address voter;
        uint256 senryuId;
    }

    Senryu[] public senryus;
    mapping(address => bool) public hasVoted;
    uint256 public nextId;

    event SenryuSubmitted(uint256 id, string content, address author);
    event Voted(uint256 senryuId, address voter);

    function submitSenryu(string memory content) public {
        senryus.push(Senryu(nextId, content, msg.sender, 0));
        emit SenryuSubmitted(nextId, content, msg.sender);
        nextId++;
    }

    function vote(uint256 senryuId) public {
        require(!hasVoted[msg.sender], "You have already voted");
        require(senryuId < senryus.length, "Invalid Senryu ID");

        senryus[senryuId].voteCount++;
        hasVoted[msg.sender] = true;

        emit Voted(senryuId, msg.sender);
    }

    function getSenryus() public view returns (Senryu[] memory) {
        return senryus;
    }
}
