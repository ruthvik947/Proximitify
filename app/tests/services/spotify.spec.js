describe("Spotify Service", function() {

    var Spotify, $httpBackend;

    beforeEach(module('proximitify'));
    beforeEach(inject(function($injector) {
        Spotify = $injector.get('Spotify');
        $httpBackend = $injector.get('$httpBackend');

        $httpBackend
            .whenGET('http://localhost:8000/following/:token?')
            .respond(200,
                {
                    data: {
                        artists: {
                            items: [
                                {id:"1", thing:"2"},
                                {id:"3", thing:"4"}
                            ]
                        }
                    }
                });
    }));

    it('The *Following* array should not be null', function() {
        Spotify.getUserFollowedArtists();
        expect(following).isDefined();
    });

});