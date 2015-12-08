var express = require('express');
var querystring = require('qs');
var spotify = require('./express-requests/spotify');
var request = require('request');

var app = express();

app.use(express.static(__dirname + '/app'));

app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.get('/', function(req, res) {
    res.redirect('index.html');
});

app.get('/spotify-auth', function(req, res) {
    spotify.login(function(htmlbody) {
        res.send(htmlbody);
    });

});

app.get('/spotify-code', function(req, res) {
    var code = req.query.code;

    spotify.getAuthCode(code, function(access_token, refresh_token) {

        res.redirect('/#/auth-complete/?'
        + querystring.stringify({
                access_token: access_token,
                refresh_token: refresh_token
            }));

    });
});

app.get('/concerts', function(req, res) {
    res.redirect('/#/concerts');
});

app.get('/following', function(req, res) {
    spotify.getFollowing(res.data, function(response) {
        res.send(response);
    })
});

app.use(function(req, res){
    res.sendStatus(404);
});

app.listen(8000);