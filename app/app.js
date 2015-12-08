angular
    .module('proximitify', ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {

                templateUrl: '/templates/login.html',
                controller: 'LoginController',
                controllerAs: 'vm'

            }).
            when('/auth-complete/:access_token?:refresh_token?', {

                resolve: {
                    authDetails : function($route) {

                        var access_token = $route.current.params.access_token;
                        var refresh_token = $route.current.params.refresh_token;

                        var authD = {access_token : access_token, refresh_token : refresh_token};

                        return authD;
                    }
                },

                templateUrl: '/templates/done.html',
                controller: 'AuthController',
                controllerAs: 'vm'
            }).
            when('/concerts', {

                templateUrl: 'templates/concerts.html',
                controller: 'ConcertsController',
                controllerAs: 'vm'

            }).
            otherwise({
                redirectTo: '/'
            });
    });
