// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import {TimelyPal} from "../src/TimelyPal.sol";

contract TimelyPalScript is Script {
    function setUp() public {}

    function run() public {
        vm.broadcast();

        TimelyPal timelyPal = new TimelyPal();

        console.log("TimelyPal deployed at:", address(timelyPal));

        vm.stopBroadcast();
    }
}
