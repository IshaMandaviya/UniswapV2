// SPDX-License-Identifier: MIT
pragma solidity >=0.8.1;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract BTCToken is ERC20 {
    constructor() ERC20("Token1", "T1") {
        _mint(msg.sender, 1000000 * 10**18);
    }
}
