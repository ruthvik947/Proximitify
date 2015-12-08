angular
    .module('proximitify', ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
            templateUrl: '/templates/login.html',
            controller: 'LoginController',
            controllerAs: 'vm'
            }).
            when('/auth-complete', {
                templateUrl: '/templates/done.html',
                controller: 'AuthController',
                controllerAs: 'vm'
            }).
            otherwise({
                redirectTo: '/'
            });
    });
