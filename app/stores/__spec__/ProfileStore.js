jest.dontMock('flux-store');
jest.dontMock('../profile');
jest.dontMock('../../constants');


describe('ProfileStore', function(){
    var store = require('../profile'),
        fb = require('../../data/firenext'),
        {CREATE_PROFILE, GET_PROFILE} = require('../../constants').actionTypes;


    describe('GET_PROFILE', function() {
        var fakeJson = {foo: 'bar'};    

        beforeEach(() => {
            fb.__setJson( fakeJson );
            store.onDispatcherAction({ action: {type: GET_PROFILE, data: "123456789"} });
        });

        afterEach(() => {
            fb.__setJson(null);
        });

        it("retrieves the requested profile by guid", function(){
            expect( store.getProfile() ).toEqual( fakeJson );
        });
    });

    describe('CREATE_PROFILE', function() {
        var fakeData = { foo: 'bar' };

        beforeEach(() => {
            store.onDispatcherAction({ action: {type: CREATE_PROFILE, data: fakeData} });
        });

        it("creates a new profile", function(){
            expect( store.getProfile() ).toEqual( fakeData );
        });
    });
});

