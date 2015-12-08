describe("Auth Service", function() {

    var Authentication;

    beforeEach(module('proximitify'));
    beforeEach(inject(function($injector) {
        Authentication = $injector.get('Authentication');
    }));

    it("Access tokens should initially be null"), function() {
        var access = Authentication.getAccessToken();
        expect(access).toBeNull();
    };

    it("Logging in should redirect to a new page", function() {
        var url = window.location;
        Authentication.login();
        var newUrl = window.location;
        !expect(url).toEqual(newUrl);
    });

});