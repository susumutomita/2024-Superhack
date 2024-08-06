// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import {Script, console} from "forge-std/Script.sol";
import {SenryuGame} from "../src/SenryuGame.sol";

contract SenryuGameScript is Script {
    function setUp() public {}

    function run() public {
        vm.startBroadcast();

        SenryuGame senryuGame = new SenryuGame();

        console.log("SenryuGame deployed at:", address(senryuGame));

        vm.stopBroadcast();
    }
}
