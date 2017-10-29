var provider = new Web3.providers.HttpProvider("http://localhost:8545");
var LoyaltyContract = TruffleContract({
abi: [
  {
    "constant": false,
    "inputs": [
      {
        "name": "addr",
        "type": "address"
      },
      {
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "RedeemLoyaltyCoin",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "name",
        "type": "string"
      },
      {
        "name": "lcvalue",
        "type": "uint256"
      }
    ],
    "name": "UpdateLCVendorsLCValue",
    "outputs": [],
    "payable": false,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "name",
        "type": "string"
      },
      {
        "name": "fiatvalue",
        "type": "uint256"
      }
    ],
    "name": "UpdateLCVendorsFiatValue",
    "outputs": [],
    "payable": false,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_name",
        "type": "string"
      },
      {
        "name": "_LCvalue",
        "type": "uint256"
      },
      {
        "name": "_FiatValue",
        "type": "uint256"
      }
    ],
    "name": "AddLCVendors",
    "outputs": [],
    "payable": false,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "addr",
        "type": "address"
      },
      {
        "name": "value",
        "type": "uint256"
      },
      {
        "name": "nameofcoin",
        "type": "string"
      }
    ],
    "name": "ExchangeLCCoinasFiat",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "name",
        "type": "string"
      },
      {
        "name": "points",
        "type": "uint256"
      }
    ],
    "name": "GetLCValue",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "receiver",
        "type": "address"
      },
      {
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "GetLoyaltyCoin",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "name",
        "type": "string"
      }
    ],
    "name": "GetLCVendors",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      },
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "GetLCbalance",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "addr",
        "type": "address"
      },
      {
        "name": "value",
        "type": "uint256"
      },
      {
        "name": "nameofcoin",
        "type": "string"
      }
    ],
    "name": "ExchangeLCCoin",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "addr",
        "type": "address"
      },
      {
        "name": "name",
        "type": "string"
      }
    ],
    "name": "GetLCbalanceasPoints",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "inputs": [],
    "payable": false,
    "type": "constructor"
  }
],
unlinked_binary:"0x6060604052341561000c57fe5b5b60008054600160a060020a03191633600160a060020a0390811691909117808355168152600360205260409020620f424090555b5b61078e806100516000396000f300606060405236156100935763ffffffff60e060020a6000350416631914eb76811461009557806327714209146100c65780632e8992b7146100e15780636ab7cd9d14610114578063720163f11461012c578063a6e4b97714610154578063bcb8144d14610187578063ccbf7420146101b5578063e0e72756146101e1578063e31482e5146101f9578063e60c06011461022d575bfe5b341561009d57fe5b6100b4600160a060020a0360043516602435610261565b60408051918252519081900360200190f35b34156100ce57fe5b6100df6004356024356044356102be565b005b34156100e957fe5b610100600160a060020a0360043516602435610377565b604080519115158252519081900360200190f35b341561011c57fe5b6100df6004356024356103eb565b005b341561013457fe5b6100b4600435602435610427565b60408051918252519081900360200190f35b341561015c57fe5b610100600160a060020a0360043516602435610476565b604080519115158252519081900360200190f35b341561018f57fe5b6100b4600160a060020a03600435166104d6565b60408051918252519081900360200190f35b34156101bd57fe5b6101c86004356104f5565b6040805192835260208301919091528051918290030190f35b34156101e957fe5b6100df60043560243561055c565b005b341561020157fe5b6100b4600160a060020a0360043516602435604435610598565b60408051918252519081900360200190f35b341561023557fe5b6100b4600160a060020a036004351660243560443561064d565b60408051918252519081900360200190f35b600081815260026020908152604080832054600160a060020a0386168452600390925282205460018054849291908490811061029957fe5b906000526020600020906003020160005b50600101540290508092505b505092915050565b60018054906102cf90828101610702565b506001805484919060001981019081106102e557fe5b906000526020600020906003020160005b505560018054839190600019810190811061030d57fe5b906000526020600020906003020160005b506001908101919091558054829190600019810190811061033b57fe5b906000526020600020906003020160005b506002908101919091556001546000858152602092909252604090912060001990910190555b505050565b600160a060020a0382166000908152600360205260408120548290108015906103b65750600160a060020a038316600090815260036020526040812054115b15156103c25760006000fd5b50600160a060020a03821660009081526003602052604090208054829003905560015b92915050565b600082815260026020526040902054600180548391908390811061040b57fe5b906000526020600020906003020160005b50600101555b505050565b600082815260026020526040812054600180548391908390811061044757fe5b906000526020600020906003020160005b50600101548481151561046757fe5b0490508092505b505092915050565b60008054600160a060020a03168152600360205260408120548290101561049d5760006000fd5b5060008054600160a060020a03908116825260036020526040808320805485900390559084168252902080548201905560015b92915050565b600160a060020a0381166000908152600360205260409020545b919050565b60008181526002602052604081205460018054839291908290811061051657fe5b906000526020600020906003020160005b506001015460018281548110151561053b57fe5b906000526020600020906003020160005b5060020154925092505b50915091565b600082815260026020526040902054600180548391908390811061057c57fe5b906000526020600020906003020160005b50600201555b505050565b600160a060020a038316600090815260036020526040812054819081908590108015906105db5750600160a060020a038616600090815260036020526040812054115b15156105e75760006000fd5b600160a060020a03861660009081526003602090815260408083208054899003905586835260029091529020546001805491935086918490811061062757fe5b906000526020600020906003020160005b50600201540290508092505b50509392505050565b600160a060020a038316600090815260036020526040812054819081908590108015906106905750600160a060020a038616600090815260036020526040812054115b151561069c5760006000fd5b600160a060020a0386166000908152600360209081526040808320805489900390558683526002909152902054600180549193508691849081106106dc57fe5b906000526020600020906003020160005b50600101540290508092505b50509392505050565b815481835581811511610372576003028160030283600052602060002091820191016103729190610734565b5b505050565b61075f91905b8082111561075b57600080825560018201819055600282015560030161073a565b5090565b905600a165627a7a72305820ee2be56ab8ef0f08d0b10e354a280f4ccb10e8f59572d0cd91d1c7674badedf20029",
networks: {
  "1509270159216": {
    "events": {},
    "links": {},
    "address": "0xf3933ad8c97106c0c00db0dee50a5c019750be22",
    "updated_at": 1509270215174
  }
  
}
});
LoyaltyContract.setProvider(provider);
LoyaltyContract.defaults({from:'0x5edcc10dafc866ec3bd7f624a1949db00aa3fead'});