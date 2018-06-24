'use strict';

angular.module('myApp.login', ['ngRoute']).factory('UserService', [function () {
    var vm = this;

    var loggedIn;
    vm.authenticate = function(username, password){
        if(username === 'admin' && password === 'password'){
            this.loggedIn = true;
            return true;
        }
        return false;
    };

    vm.isLoggedIn = function(){
        return this.loggedIn;
    }
    return vm;
}]);