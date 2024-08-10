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
    mapping(address => mapping(uint256 => bool)) public hasVoted;
    uint256 public nextId;

    event SenryuSubmitted(uint256 id, string content, address author);
    event Voted(uint256 senryuId, address voter);

    function submitSenryu(string memory content) public {
        senryus.push(Senryu(nextId, content, msg.sender, 0));
        emit SenryuSubmitted(nextId, content, msg.sender);
        nextId++;
    }

    function vote(uint256 senryuId) public {
        require(!hasVoted[msg.sender][senryuId], "You have already voted for this Senryu.");
        require(senryuId < senryus.length, "Invalid Senryu ID.");

        senryus[senryuId].voteCount++;
        hasVoted[msg.sender][senryuId] = true;

        emit Voted(senryuId, msg.sender);
    }

    function getSenryus(uint256 page, uint256 pageSize) public view returns (Senryu[] memory) {
        uint256 start = (page - 1) * pageSize;
        uint256 end = start + pageSize;
        end = end > senryus.length ? senryus.length : end;
        Senryu[] memory result = new Senryu[](end - start);
        for (uint256 i = start; i < end; i++) {
            result[i - start] = senryus[i];
        }
        return result;
    }

    function getTopSenryus(uint256 page, uint256 pageSize) public view returns (Senryu[] memory) {
        uint256 len = senryus.length;
        Senryu[] memory sortedSenryus = new Senryu[](len);
        for (uint256 i = 0; i < len; i++) {
            sortedSenryus[i] = senryus[i];
        }
        for (uint256 i = 0; i < len - 1; i++) {
            for (uint256 j = 0; j < len - 1 - i; j++) {
                if (sortedSenryus[j].voteCount < sortedSenryus[j + 1].voteCount) {
                    Senryu memory temp = sortedSenryus[j];
                    sortedSenryus[j] = sortedSenryus[j + 1];
                    sortedSenryus[j + 1] = temp;
                }
            }
        }
        uint256 start = (page - 1) * pageSize;
        uint256 end = start + pageSize;
        end = end > len ? len : end;
        Senryu[] memory result = new Senryu[](end - start);
        for (uint256 i = start; i < end; i++) {
            result[i - start] = sortedSenryus[i];
        }
        return result;
    }
}
