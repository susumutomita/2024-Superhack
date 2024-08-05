// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract MissionChain {
    struct Mission {
        string companyName;
        string missionCid;
    }

    Mission[] private missions;

    function setMission(
        string memory _companyName,
        string memory _missionCid
    ) public {
        missions.push(Mission(_companyName, _missionCid));
    }

    function getMissionCount() public view returns (uint256) {
        return missions.length;
    }

    function getMissionByIndex(
        uint256 index
    ) public view returns (string memory, string memory) {
        require(index < missions.length, "Index out of bounds");
        Mission storage mission = missions[index];
        return (mission.companyName, mission.missionCid);
    }
}
