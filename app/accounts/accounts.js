'use strict';

angular.module('myApp.accounts')

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/dashboard', {
      templateUrl: 'accounts/accounts.html',
      controller: 'AccountsCtrl'
    });
  }])

  .controller('AccountsCtrl', ['$scope', 'AccountService', 'UserService', '$window', function ($scope, accountService, userService, $window) {

    if (!userService.isLoggedIn()) {
      $window.location.href = '/#!/login';
    }

    $scope.accountList = accountService.getAccountList();

    $scope.loadAccountDetails = function (id) {
      $window.location.href = '/#!/account_details/' + id;
    }


  }]);