// SPDX-License-Identifier: MIT

pragma solidity 0.6.12;

import "./BEP20.sol";

/**
 * @dev Extension of {BEP20} that adds a cap to the supply of tokens.
 */
abstract contract BEP20Capped is BEP20 {
    uint256 immutable private _cap;

    /**
     * @dev Sets the value of the `cap`. This value is immutable, it can only be
     * set once during construction.
     */
    constructor (uint256 cap) public {
        require(cap > 0, "BEP20Capped: cap is 0");
        _cap = cap;
    }

    /**
     * @dev Returns the cap on the token's total supply.
     */
    function cap() public view virtual returns (uint256) {
        return _cap;
    }

    /**
     * @dev See {BEP20-_mint}.
     */
    function _mint(address account, uint256 amount) internal virtual override {
        require((BEP20.totalSupply()).add(amount) <= cap(), "BEP20Capped: cap exceeded");
        super._mint(account, amount);
    }
}