const { assert } = require("chai");

const DefiFarmsToken = artifacts.require('DefiFarmsToken');

contract('DefiFarmsToken', ([alice, bob, carol, dev, minter]) => {
    beforeEach(async () => {
        this.defiFarmsToken = await DefiFarmsToken.new({ from: minter });
    });


    it('mint', async () => {
        await this.defiFarmsToken.mint(alice, 1000, { from: minter });
        assert.equal((await this.defiFarmsToken.balanceOf(alice)).toString(), '1000');
    })
});