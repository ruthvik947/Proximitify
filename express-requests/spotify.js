var request = require('request');
var querystring = require('qs');

var clientId = 'a68639b777b64ecbb8ef05826af1a66b';
var redirectUri = 'http://localhost:8000/spotify-code';
var clientSecret = 'eb4eeddb195a4ca0abfdbec2f20b1a02';

var accessToken = null;
var refreshToken = null;

module.exports = {
    login: function(callback) {

        function getLoginURL(scopes) {
            return 'https://accounts.spotify.com/authorize?client_id=' + clientId
                + '&redirect_uri=' + encodeURIComponent(redirectUri)
                + '&scope=' + encodeURIComponent(scopes)
                + '&response_type=code';
        }

        request({
            method: 'GET',
            url: getLoginURL('user-follow-read')
        }, function(error, response, body) {
            console.log(response.statusCode);
            callback(response);
        });

    },

    getAuthCode: function(code, callback) {

        var authOptions = {
            url: 'https://accounts.spotify.com/api/token',
            form: {
                code: code,
                redirect_uri: redirectUri,
                grant_type: 'authorization_code'
            },
            headers: {
                'Authorization': 'Basic ' + (new Buffer(clientId + ':' + clientSecret).toString('base64'))
            },
            json: true
        };

        request.post(authOptions, function(error, response, body) {
            if (!error && response.statusCode === 200) {

                var access_token = body.access_token,
                    refresh_token = body.refresh_token;

                accessToken = access_token;
                refreshToken = refresh_token;

                var options = {
                    url: 'https://api.spotify.com/v1/me',
                    headers: {'Authorization': 'Bearer ' + access_token},
                    json: true
                };

                // use the access token to access the Spotify Web API
                request.get(options, function (error, response, body) {
                    //console.log(body);
                });

                callback(access_token, refresh_token);
            }

        });

    },

    getFollowing: function(token, callback) {

        request({
            method: 'GET',
            url: 'https://api.spotify.com/v1/me/following?type=artist',
            headers: {
                Authorization: 'Bearer ' + accessToken
            }
        }, function(error, response, body) {
            callback(body);
        })

    }
};
