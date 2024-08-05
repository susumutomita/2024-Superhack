// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract MissionChain {
    struct Mission {
        string companyName;
        string missionCid;
    }

    Mission[] private missions;
    address private owner;

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the contract owner");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function setMission(
        string memory _companyName,
        string memory _missionCid
    ) public onlyOwner {
        missions.push(Mission(_companyName, _missionCid));
    }

    function getMissionCount() public view returns (uint256) {
        return missions.length;
    }

    function getMissionByIndex(
        uint256 index
    ) public view returns (string memory, string memory) {
        require(index < missions.length, "Mission index out of bounds");
        Mission storage mission = missions[index];
        return (mission.companyName, mission.missionCid);
    }
}
