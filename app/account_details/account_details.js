'use strict';

angular.module('myApp.accounts')

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/account_details/:id', {
      templateUrl: 'account_details/account_details.html',
      controller: 'AccountDetailsCtrl'
    });
  }])

  .controller('AccountDetailsCtrl', ['$scope', 'AccountDetailsService', '$routeParams', '$window', function ($scope, accountDetailsService, $routeParams, $window) {
    $scope.accountDetails = accountDetailsService.getAccountDetails($routeParams.id);

    $scope.loadTransaction = function (trans) {
      $window.location.href = '/#!/transaction/' + trans;
    }
  }]);