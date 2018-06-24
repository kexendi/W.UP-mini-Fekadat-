'use strict';

angular.module('myApp.accounts',['ngRoute']).factory('AccountService', [function () {
    var vm = this;

    vm.getAccountList = function () {
        var accounts = [
            { id: 1, szamlaSzam: "11773346-33333333-00000000", egyenleg: 250000, devizanem: "HUF" },
            { id: 2, szamlaSzam: "11773346-22222222-00000000", egyenleg: 100000, devizanem: "EUR" }
        ];
        return accounts;
    };

    return vm;
}]);