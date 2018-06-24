'use strict';

angular.module('myApp')

    .controller('MenuCtrl', ['$scope', '$window', function ($scope, $window) {

        $scope.loadTransaction = function () {
            $window.location.href = '/#!/transaction/';
        }



    }]);