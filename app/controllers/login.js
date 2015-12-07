angular
.module('proximitify')
.controller('LoginController', ['Authentication', function(Authentication) {
    var vm = this;

    vm.login = function() {
        Authentication.login();
    };

}]);