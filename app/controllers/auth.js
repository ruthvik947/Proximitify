angular
    .module('proximitify')
    .controller('AuthController', function(authDetails, $http, Authentication) {

        var vm = this;

        auth = authDetails;

        var access_token;
        var refresh_token;

        vm.authDone = function() {
            access_token = auth.access_token;
            refresh_token = auth.refresh_token;

            Authentication.setAccessToken(access_token);
            Authentication.setRefreshToken(refresh_token);

            window.location.replace('http://localhost:8000/concerts');
        };

    });