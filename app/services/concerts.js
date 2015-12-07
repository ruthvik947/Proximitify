var baseUrl = 'http://api.eventful.com/json/events/search?c=music&app_key=kggLj6WqGCGrjNDs&page_number=1&date=Future' +
                    '&keywords=';

angular
    .module('proximitify')
    .factory('ConcertFinder', function($http) {

        return {
            findConcerts : function(artistName) {
                var url = baseUrl + encodeURIComponent(artistName) + '&callback=JSON_CALLBACK';

                return $http.jsonp(url).then(function(response) {
                    return response.events.event;
                });
            }
        }

    });