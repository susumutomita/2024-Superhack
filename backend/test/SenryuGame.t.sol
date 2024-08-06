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
        bool hasVoted = senryuGame.hasVoted(address(this));
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
            assertEq(reason, "You have already voted");
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
            assertEq(reason, "Invalid Senryu ID");
        }
    }
}
