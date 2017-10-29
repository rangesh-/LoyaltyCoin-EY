var ConvertLib = artifacts.require("./ConvertLib.sol");
var MetaCoin = artifacts.require("./MetaCoin.sol");
var LoyaltyCoin = artifacts.require("./LoyaltyCoin.sol");
var LoyaltyProvider = artifacts.require("./LoyaltyProvider.sol");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, MetaCoin);
  deployer.deploy(MetaCoin);
  deployer.deploy(LoyaltyCoin);
  deployer.link(LoyaltyCoin,LoyaltyProvider);
  deployer.deploy(LoyaltyProvider);
};
