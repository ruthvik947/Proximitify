angular
    .module('proximitify')
    .controller('AuthController', ['$window', function($window) {

        var vm = this;

        vm.authDone = function () {
           console.log(location);
        }

    }]);