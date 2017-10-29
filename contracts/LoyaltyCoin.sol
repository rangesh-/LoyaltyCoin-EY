pragma solidity ^0.4.4;
import "./LoyaltyProvider.sol";

contract LoyaltyCoin {

LoyaltyProvider provider;

function LoyaltyCoin(address addrressofloyaltyprovider) {

    provider = LoyaltyProvider(addrressofloyaltyprovider);
}

function IssueLoyaltyCoin(address receiverofloyalty,uint points,string vendor) public returns(uint256) {
var loyaltyamount =  provider.GetLCValue(vendor,points);
var result=provider.GetLoyaltyCoin(receiverofloyalty,loyaltyamount);
if (result) {
    return loyaltyamount;
} else {
    return 0;
}

}

function RedeemLoyaltyCoin(address addr,uint pointstoberedeemed) public returns(bool){
return provider.RedeemLoyaltyCoin(addr,pointstoberedeemed);
}

function ExchangeLoyaltyCoin(address addr,uint value,string nameofcoin) public returns (uint){
return provider.ExchangeLCCoin(addr,value,nameofcoin);
}

function ExchangeLCCoinasFiat(address addr,uint value,string nameofcoin) public returns (uint){
return provider.ExchangeLCCoinasFiat(addr,value,nameofcoin);
}

function GetBalanceasLC(address addr) returns (uint){
return provider.GetLCbalance(addr);
}

function GetBalanceasPoints(address addr,string name) returns (uint){
return provider.GetLCbalanceasPoints(addr,name);
}

}