const Address = artifacts.require("Address");
const SafeMath = artifacts.require("SafeMath");
const DefiFarmsToken = artifacts.require("DefiFarmsToken");

module.exports = async function (deployer) {
    await deployer.deploy(Address);
    await deployer.deploy(SafeMath);

    await deployer.link(Address, DefiFarmsToken);
    await deployer.link(SafeMath, DefiFarmsToken);

    await deployer.deploy(DefiFarmsToken);
};
