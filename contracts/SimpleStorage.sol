// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleStorage {
    uint256 private storedData1;
    uint256 private storedData2;
    uint256 private storedData3;
    uint256 private storedData4;
    uint256 private storedData5;
    uint256 private storedData6;

    function setter(uint256 x,uint256 id) public {
            if (id==1){
                storedData1 = x + 1;
            }
            else if(id==2){
                storedData2 = x + 1;
            }
            else if(id==3){
                storedData3 = x + 1;
            }
            else if(id==4){
                storedData4 = x + 1;
            }
            else if(id==5){
                storedData5 = x + 1;
            }
            else {
                storedData6 = x + 1;
            }
    }

    function getter(uint256 id) public view returns (uint256) {
        if (id==1){
                return storedData1;
            }
            else if(id==2){
                return storedData2;
            }
            else if(id==3){
                return storedData3;
            }
            else if(id==4){
                return storedData4;
            }
            else if(id==5){
                return storedData5;
            }
            else {
                return storedData6;
            }
}
}