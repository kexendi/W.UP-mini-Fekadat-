'use strict';

angular.module('myApp.transaction', ['ngRoute']).factory('TransactionOverviewService', [function () {
    var vm = this;
    var transactionOverview = [];
    transactionOverview['1'] = {id: 1,forrasSzamlaSzam: '11773346-33333333-00000000',celSzamlaSzam: '11773346-33333333-00000001',kedvezmenyezettNeve: 'Kis János',osszeg: 100,devizanem: 'HUF',datum: '2018.01.01',kozlemeny: 'Valami szöveg, ami a közlemény tárgya'};
    transactionOverview['1'] = {id: 1,forrasSzamlaSzam: '11773346-33333333-00000000',celSzamlaSzam: '11773346-33333333-00000001',kedvezmenyezettNeve: 'Kis János',osszeg: 100,devizanem: 'HUF',datum: '2018.01.01',kozlemeny: 'Valami szöveg, ami a közlemény tárgya'};

    transactionOverview['2'] = {id: 2,forrasSzamlaSzam: '11773346-33333333-00000011',celSzamlaSzam: '11773346-33333333-00000001',kedvezmenyezettNeve: 'Nagy János',osszeg: 50,devizanem: 'EUR',datum: '2018.02.02',kozlemeny: 'Második szöveg a közleméényhez.'};
    transactionOverview['2'] = {id: 2,forrasSzamlaSzam: '11773346-33333333-00000011',celSzamlaSzam: '11773346-33333333-00000001',kedvezmenyezettNeve: 'Nagy János',osszeg: 50,devizanem: 'EUR',datum: '2018.02.02',kozlemeny: 'Második szöveg a közleméényhez.'};

    vm.getTransactionOverview = function (id) {
        return transactionOverview[id];
    };

    return vm;
}]);