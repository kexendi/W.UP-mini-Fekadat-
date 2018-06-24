'use strict';

angular.module('myApp.login')

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/login', {
      templateUrl: 'login/login.html',
      controller: 'LoginCtrl'
    });
  }])

  .controller('LoginCtrl', ['$scope', 'UserService', '$window','$rootScope', function ($scope, UserService, $window, $rootScope) {
    $scope.errorMessage = false;
    $rootScope.isVisible = false;

    $scope.loadDashboard = function () {

      if (UserService.authenticate($scope.username, $scope.password)) {
        $rootScope.isVisible = true;
        $window.location.href = '/#!/dashboard';
      } else {
        $scope.errorMessage = true;
      }
    }
  }]);
