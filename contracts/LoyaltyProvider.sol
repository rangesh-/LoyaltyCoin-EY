pragma solidity ^0.4.4;
contract LoyaltyProvider {
uint constant LoyaltyTokenSupply = 1000000; 
address owner; 
struct Vendor{
   string name;
   uint LCvalue;
   uint Fiatvalue;
}
Vendor[] vendors;
mapping(string=>uint) vendorkey;
mapping(address=>uint) loyalty;

function LoyaltyProvider() {
owner = msg.sender;
loyalty[owner]=LoyaltyTokenSupply;
}
modifier onlyOwner() {
  require (msg.sender == owner); 
  _;
      }

    function  AddLCVendors(string _name,uint _LCvalue,uint _FiatValue) onlyOwner() public {
     vendors.length++;
     vendors[vendors.length-1].name=_name;
     vendors[vendors.length-1].LCvalue=_LCvalue;
     vendors[vendors.length-1].Fiatvalue= _FiatValue;
     vendorkey[_name]=vendors.length-1;
    }

    function GetLCVendors(string name) public returns(uint,uint) {
    var index = vendorkey[name];
    return (vendors[index].LCvalue,vendors[index].Fiatvalue);
    }

    function GetLCValue(string name,uint points) public returns(uint){
       var index = vendorkey[name];
       var LCvalue= points/vendors[index].LCvalue;
       return LCvalue;
    }

    function GetLoyaltyCoin(address receiver, uint value) public returns(bool){
      require(loyalty[owner]>=value);     
      loyalty[owner] -= value;
      loyalty[receiver] += value;
      return true;
    }

    function RedeemLoyaltyCoin(address addr,uint value) public returns (bool) {
    require(loyalty[addr]>=value && loyalty[addr]>0);
    loyalty[addr] -= value;
    return true; 
    }

    function ExchangeLCCoin(address addr,uint value,string nameofcoin) public returns (uint){
     require(loyalty[addr]>=value && loyalty[addr]>0);   
     loyalty[addr] = loyalty[addr]-value;
     var index=vendorkey[nameofcoin];
     var points = vendors[index].LCvalue*value;
     return points;
    }

    function ExchangeLCCoinasFiat(address addr,uint value,string nameofcoin) public returns (uint){
    require(loyalty[addr]>=value && loyalty[addr]>0);   
     loyalty[addr] = loyalty[addr]-value;
     var index=vendorkey[nameofcoin];
     var fiatvalue = vendors[index].Fiatvalue*value;
     return fiatvalue;

    }

    function GetLCbalance(address addr) public returns(uint) {
      return loyalty[addr];
    }

     function GetLCbalanceasPoints(address addr,string name) public returns(uint) {
      var index=vendorkey[name];
       var points = vendors[index].LCvalue*loyalty[addr];
       return points;
    }

    function UpdateLCVendorsFiatValue(string name,uint fiatvalue) onlyOwner() public {
     var index = vendorkey[name];
     vendors[index].Fiatvalue=fiatvalue;
    }

    function UpdateLCVendorsLCValue(string name,uint lcvalue) onlyOwner() public {
     var index = vendorkey[name];
     vendors[index].LCvalue=lcvalue;
    }

}