angular
    .module('proximitify')
    .factory('Authentication', [function() {

        var clientId = "a68639b777b64ecbb8ef05826af1a66b";
        var redirectUri = "http://localhost:8000/spotify-code";

        var access_token = null;
        var refresh_token = null;

        function getLoginURL(scopes) {
            return 'https://accounts.spotify.com/authorize?client_id=' + clientId
                + '&redirect_uri=' + encodeURIComponent(redirectUri)
                + '&scope=' + encodeURIComponent(scopes)
                + '&response_type=code';
        }

        return {
            login: function () {

                //var w = 450,
                //    h = 600,
                //    left = (screen.width / 2) - (w / 2),
                //    top = (screen.height / 2) - (h / 2);

                function openWindow() {
                    //var win = window.open(
                    //    getLoginURL(''),
                    //    'Spotify',
                    //    'menubar=no,location=no,resizable=yes,scrollbars=yes,status=no,width=' +
                    //    w + ',height=' + h + ',top=' + top + ',left=' + left
                    //);

                    window.location.href = getLoginURL('');

                }

                openWindow();

            },

            getAccessToken : function() {
                return access_token;
            },

            getRefreshToken : function() {
                return refresh_token;
            },

            setAccessToken : function(at) {
                access_token = at;
            },

            setRefreshToken : function(rt) {
                refresh_token = rt;
            }
    }

    }]);