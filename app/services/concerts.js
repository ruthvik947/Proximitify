var baseUrl = 'http://api.eventful.com/json/events/search?c=music&app_key=kggLj6WqGCGrjNDs&page_number=1&date=Future' +
                    '&keywords=';

angular
    .module('proximitify')
    .factory('ConcertFinder', function($http) {

        return {

            getConcertsByArtist: function (artistName) {

                var url = baseUrl + encodeURIComponent(artistName);

                //function processJSONP(response) {
                //    console.log('Concerts', response);
                //}
                //
                //$.getJSON(url, processJSONP);

            }

        }

    });