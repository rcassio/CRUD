// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.0;

contract Crud {

    struct User {
        uint id;
        string name;
    }

    User[] public users;
    uint public nextId = 1;

    function create(string memory name) public {
        users.push(User(nextId, name));
        nextId++;
    }
    
    function read(uint id) view public returns(uint, string memory) {
        uint index = find(id);
        return(users[index].id, users[index].name);
    }

    function update(uint id, string memory name) public {
        uint index = find(id);
        users[index].name = name;
    }

    function destroy(uint id) public {
        uint index = find(id);
        delete users[index];
    }

    function find(uint id) view public returns(uint index) {
        for (uint i; i < users.length; i++) {
            if(users[i].id == id) {
                return i;
            }
        }
        revert('User not found');
    }

    function test() pure public returns(string memory) {
        return "test";
    }
}