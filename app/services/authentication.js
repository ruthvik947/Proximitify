angular
    .module('proximitify')
    .factory('Authentication', [function() {

        var clientId = "a68639b777b64ecbb8ef05826af1a66b";
        var redirectUri = "http://localhost:8000/spotify-code";

        function getLoginURL(scopes) {
            return 'https://accounts.spotify.com/authorize?client_id=' + clientId
                + '&redirect_uri=' + encodeURIComponent(redirectUri)
                + '&scope=' + encodeURIComponent(scopes)
                + '&response_type=code';
        }

        return {
            login: function () {

                var w = 450,
                    h = 600,
                    left = (screen.width / 2) - (w / 2),
                    top = (screen.height / 2) - (h / 2);

                function openWindow() {
                    var win = window.open(
                        getLoginURL(''),
                        'Spotify',
                        'menubar=no,location=no,resizable=yes,scrollbars=yes,status=no,width=' +
                        w + ',height=' + h + ',top=' + top + ',left=' + left
                    );

                }

                openWindow();

            },

            getAccessToken: function() {
                var expires = 0 + localStorage.getItem('pa_expires', '0');
                if ((new Date()).getTime() > expires) {
                    return '';
                }
                return localStorage.getItem('pa_token', '');
            }
    }

    }]);