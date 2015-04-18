jest.dontMock('../../constants');
jest.dontMock('flux-store');
jest.dontMock('../location');


describe("LocationStore", function(){
    var request = require('browser-request'),
        {actionTypes} = require('../../constants'),
        store = require('../location');
    
    describe(".getLocation", function(){
        it("returns the current state of LocationStore", function(){
            expect( store.getLocation() ).toBeEmptyArray();
        });
    });
    
    it("sets state from browser", function(){
        var coords = [0, 1];
        store.onDispatcherAction({type: actionTypes.SET_LOCATION, data: coords});

        expect( store.getLocation() ).toEqual(coords);
    });

    it("sets state from IP geolocation", function(){
        store.onDispatcherAction({type: actionTypes.SET_LOCATION});

        expect( store.getLocation() ).toBeArrayOfNumbers();
    });

    
    describe(".onResolve", function(){
        var coords = [0, 1];
        
        it("assigns its argument to LocationStore state", function(){
            store.onResolve(coords);
            
            expect( store.getLocation() ).toBe(coords);
        });
    });
    
    describe(".handleDefault", function(){
        var mockOnResolve = jest.genMockFn(),
            actualOnResolve = store.onResolve;

        beforeEach(function(){
            store.onResolve = mockOnResolve;
        });

        afterEach(function(){
            store.onResolve = actualOnResolve;
        });

        it("requests client IP geocoordinates from freegeoip.net", function(){
            store.handleDefault();
            expect(request).toBeCalledWith('http://freegeoip.net/json/', function(){} );
        });

        it ("a successful response is assigned to store state", function(){
            store.handleDefault();
            expect(store.getLocation()).toBeArrayOfNumbers();
        });
    });
});
