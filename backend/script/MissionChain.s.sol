// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import {MissionChain} from "../src/MissionChain.sol";

contract MissionChainScript is Script {
    function setUp() public {}

    function run() public {
        vm.startBroadcast();

        MissionChain missionChain = new MissionChain();

        console.log("MissionChain deployed at:", address(missionChain));

        vm.stopBroadcast();
    }
}
