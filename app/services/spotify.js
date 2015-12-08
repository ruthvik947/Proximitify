angular
    .module('proximitify')
    .factory('Spotify', function($http, Authentication) {

        // Contains artist object data
        var following = null;

        return {

            getUserFollowedArtists : function() {

                if (following) { return following; }

                return (
                    $http({
                        method: 'GET',
                        url: 'http://localhost:8000/following',
                        data: Authentication.getAccessToken()

                    }).then(function success(response) {

                        //console.log('Success', response.data.artists.items);
                        following = response.data.artists.items;

                        return following;

                    }, function error(response) {

                        console.log('Error', response);

                    })
                )

            }

        }

    });
