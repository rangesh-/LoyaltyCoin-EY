// "use strict";

function getBalances(){
  var deployed;
MyContract.deployed().then(function(instance) {
  var deployed = instance;
  //MyContract.link(instance);
   return instance.GetLCbalance.call("0x9f61adb7c561e4762d2f25fc318b0957c0cd4b16");
}).then(function(result) {
console.log(result);
});
}

var app = angular.module("mySimpleWalletDapp", ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainController'
  }).when('/events', {
    templateUrl: 'views/events.html',
    controller: 'ShoweventsController'
  }).when('/sendfunds', {
    templateUrl: 'views/sendfunds.html',
    controller: 'SendfundsController'
  }).when('/permissions', {
    templateUrl: 'views/permissions.html',
    controller: 'PermissionsController'
  }).otherwise({redirectTo: '/'});
});

 