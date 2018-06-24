'use strict';

angular.module('myApp.transaction')

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/transaction/:trans', {
            templateUrl: 'transaction/transaction.html',
            controller: 'TransactionCtrl'
        });
    }])

    .controller('TransactionCtrl', ['$scope', '$routeParams', 'TransactionOverviewService', function ($scope, $routeParams,TransactionOverviewService) {
        
        $scope.transactionOverview = TransactionOverviewService.getTransactionOverview($routeParams.trans);
        
    }]);

    