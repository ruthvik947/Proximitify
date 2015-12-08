angular
    .module('proximitify')
    .controller('ConcertsController', function($http, ConcertFinder, Spotify) {

        var vm = this;
        vm.artists = [];

        vm.init = function($http) {

            Spotify.getUserFollowedArtists().then(function (response) {
                console.log('ConcertsController', response);
                vm.artists = response;

                //ConcertFinder.getConcertsByArtist('name');
            });

        };

        vm.init();

    });
