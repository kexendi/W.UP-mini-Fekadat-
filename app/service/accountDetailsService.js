'use strict';

angular.module('myApp.accounts').factory('AccountDetailsService', [function () {
    var vm = this;
    var accountDetails = [];
    accountDetails['1'] = { id: 1, szamlaSzam: '11773346-33333333-00000000', egyenleg: 250000, konyveltEgyenleg: 100, blokkoltOsszeg: 0, devizanem: 'HUF', Szamlatermekkodja: 'QwErT123', Link1: '[link1]', Link2: '[link2]' };
    accountDetails['2'] = { id: 2, szamlaSzam: '11773346-22222222-00000000', egyenleg: 100000, konyveltEgyenleg: 50000, blokkoltOsszeg: 0, devizanem: 'EUR', Szamlatermekkodja: 'AsDFg876', Link1: '[link1]', Link2: '[link2]' };

    vm.getAccountDetails = function (id) {
        return accountDetails[id];
    };
    
    return vm;
}]);