jest.dontMock('../../constants');
jest.dontMock('flux-store');
jest.dontMock('../location');


describe("LocationStore", function(){
    var {actionTypes} = require('../../constants'),
        store = require('../location');
    
    describe(".getLocation", function(){
        it("returns the current state of LocationStore", function(){
            expect( store.getLocation() ).toBeEmptyArray();
        });
    });
    
    it("sets state from browser", function(){
        var coords = [0, 1];
        store.onDispatcherAction({ action: {type: actionTypes.SET_LOCATION, data: coords} });

        expect( store.getLocation() ).toEqual(coords);
    });

    it("sets state from IP geolocation", function(){
        store.onDispatcherAction({ action: {type: actionTypes.SET_LOCATION} });

        expect( store.getLocation() ).toBeArrayOfNumbers();
    });
});