
var address="0x1b8189d0fa42d624788faba6cf4a6ebff9d99a93";
var deployedcontractaddress="0xf3933ad8c97106c0c00db0dee50a5c019750be22";

function AddVendor(){
    var name=$("#vendorname").val();
    var lval=$("#lcval").val();
    var fval=$("#fval").val();
    addvendortochain(name,lval,fval);
  }

function addvendortochain(vendorname,lval,fval){
    LoyaltyContract.at(deployedcontractaddress).then(function(instance) {
     return instance.AddLCVendors(vendorname,lval,fval, {from: address, gas: 1000000});
  }).then(function(result) {
    console.log(result);  
  });

  }

  function getVendorInfo(vendorname){

    LoyaltyContract.at(deployedcontractaddress).then(function(instance) {
        return instance.GetLCVendors.call(vendorname);
     }).then(function(result) {
       console.log(result); 
      
     });
  }



  function IssueLoyaltyCoin(){
    LoyaltyContract.at(deployedcontractaddress).then(function(instance) {
        return instance.GetLoyaltyCoin(address,$("#issuepoints").val(),{from:address, gas: 1000000});
     }).then(function(result) {
         $("#issuediv").html("You have converted " + $("#issuepoints").val() +"points to LoyaltyCoin");
     });
    }

     function RedeemLoyaltyCoin(){
        LoyaltyContract.at(deployedcontractaddress).then(function(instance) {
            return instance.RedeemLoyaltyCoin(address,$("#loyalcoin").val(),{from:address, gas: 1000000});
         }).then(function(result) {
            $("#redeemdiv").html("You have Redeemed  " + $("#loyalcoin").val() +" LightCoins");
         });
  }

  function ExchangeLCCoin(){
    LoyaltyContract.at(deployedcontractaddress).then(function(instance) {
        return instance.ExchangeLCCoin.call(address,$("#lccoin").val(),"Reliance");
     }).then(function(result) {
        $("#exchangediv").html("You have Exchanged " + $("#lccoin").val()+" LoyaltyCoin with " +result.c[0]+" Reliance Points");
     
     });
  }

  function ExchangeLCFiat(){
    LoyaltyContract.at(deployedcontractaddress).then(function(instance) {
        return instance.ExchangeLCCoinasFiat.call(address,$("#lcfiat").val(),"Reliance");
     }).then(function(result) {
        $("#exchangefiatdiv").html("You have Exchanged " + $("#lcfiat").val()+" LoyaltyCoin with " +result.c[0]+" Reliance Fiat value");
     });
  }

  function GetBalance(){
    LoyaltyContract.at(deployedcontractaddress).then(function(instance) {
        return instance.GetLCbalance.call(address);
     }).then(function(result) {
         $("#bal").html("Balance:"+result.c[0] + " LoyaltyCoin");
        
     });
  }