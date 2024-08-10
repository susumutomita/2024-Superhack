// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import {Test, console} from "forge-std/Test.sol";
import {SenryuGame} from "../src/SenryuGame.sol";

contract SenryuGameTest is Test {
    SenryuGame public senryuGame;

    function setUp() public {
        senryuGame = new SenryuGame();
    }

    function testSubmitSenryu() public {
        string memory content = "A test senryu";

        // Submit a new senryu
        senryuGame.submitSenryu(content);

        // Verify the senryu was added
        (uint256 id, string memory actualContent, address author, uint256 voteCount) = senryuGame.senryus(0);

        assertEq(id, 0);
        assertEq(actualContent, content);
        assertEq(author, address(this));
        assertEq(voteCount, 0);
    }

    function testVote() public {
        string memory content = "A test senryu";

        // Submit a new senryu
        senryuGame.submitSenryu(content);

        // Vote for the senryu
        senryuGame.vote(0);

        // Verify the vote was counted
        (,,, uint256 voteCount) = senryuGame.senryus(0);
        assertEq(voteCount, 1);

        // Verify that the voter cannot vote again
        bool hasVoted = senryuGame.hasVoted(address(this), 0);
        assertTrue(hasVoted);
    }

    function testCannotVoteTwice() public {
        string memory content = "A test senryu";

        // Submit a new senryu
        senryuGame.submitSenryu(content);

        // Vote for the senryu
        senryuGame.vote(0);

        // Try to vote again and expect a revert
        try senryuGame.vote(0) {
            // This should fail
            assertTrue(false);
        } catch Error(string memory reason) {
            assertEq(reason, "You have already voted for this Senryu.");
        }
    }

    function testInvalidSenryuId() public {
        string memory content = "A test senryu";

        // Submit a new senryu
        senryuGame.submitSenryu(content);

        // Try to vote for an invalid senryu ID and expect a revert
        try senryuGame.vote(1) {
            // This should fail
            assertTrue(false);
        } catch Error(string memory reason) {
            assertEq(reason, "Invalid Senryu ID.");
        }
    }

    function testGetSenryusPagination() public {
        // Submit multiple senryus
        for (uint256 i = 0; i < 15; i++) {
            senryuGame.submitSenryu(string(abi.encodePacked("Senryu ", i)));
        }

        // Fetch the first page of senryus
        SenryuGame.Senryu[] memory page1 = senryuGame.getSenryus(1, 10);
        assertEq(page1.length, 10);
        assertEq(page1[0].id, 0);
        assertEq(page1[9].id, 9);

        // Fetch the second page of senryus
        SenryuGame.Senryu[] memory page2 = senryuGame.getSenryus(2, 10);
        assertEq(page2.length, 5);
        assertEq(page2[0].id, 10);
        assertEq(page2[4].id, 14);
    }

    function testGetTopSenryus() public {
        // Submit multiple senryus
        for (uint256 i = 0; i < 15; i++) {
            senryuGame.submitSenryu(string(abi.encodePacked("Senryu ", i)));
        }

        // Vote for the first 10 senryus with varying votes
        for (uint256 i = 0; i < 10; i++) {
            for (uint256 j = 0; j <= i; j++) {
                address voter = address(uint160(j + 1));
                vm.prank(voter);
                senryuGame.vote(i);
            }
        }

        // Fetch the top 10 senryus
        SenryuGame.Senryu[] memory topSenryus = senryuGame.getTopSenryus(1, 10);
        assertEq(topSenryus.length, 10);
        assertEq(topSenryus[0].id, 9);
        assertEq(topSenryus[0].voteCount, 10);
        assertEq(topSenryus[9].id, 0);
        assertEq(topSenryus[9].voteCount, 1);
    }
}
