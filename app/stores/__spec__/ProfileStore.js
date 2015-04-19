jest.dontMock('flux-store');
jest.dontMock('../profile');
jest.dontMock('../../constants');


describe('ProfileStore', function(){
    var store = require('../profile'),
        geo = require('../../data/geofire'),
        {SET_PROFILE, GET_PROFILE} = require('../../constants').actionTypes;


    describe('GET_PROFILE', function() {

        beforeEach(() => {
            geo.__setJson( {foo: 'bar'} );
            store.onDispatcherAction({ action: {type: GET_PROFILE, data: "123456789"} });
        });

        afterEach(() => {
            geo.__setJson(null);
        });

        it("retrieves the requested profile by guid", function(){
            expect( store.getProfile() ).toEqual( {foo: 'bar'} );
        });
    });

    xdescribe('SET_PROFILE', function() {
        beforeEach(() => {
            //store.onDispatcherAction({ action: {type: SET_PROFILE, data: ''} });
        });
    });
});

