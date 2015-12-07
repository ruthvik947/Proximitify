//(function() {

  angular
      .module('proximitify', ['ngRoute'])
      .config(function($routeProvider) {
        $routeProvider
          .when('/', {
            templateUrl: '/app/templates/login.html',
            controller: 'LoginController',
            controllerAs: 'vm'
          })
          .otherwise({
            redirectTo: '/'
          });
      });

//});


