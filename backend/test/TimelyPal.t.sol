// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";
import {TimelyPal} from "../src/TimelyPal.sol";

contract TimelyPalTest is Test {
    TimelyPal public timelyPal;

    function setUp() public {
        timelyPal = new TimelyPal();
    }
}
