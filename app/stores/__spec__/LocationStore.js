jest.dontMock('flux-store');
jest.dontMock('../location');


describe("LocationStore", function(){
    var request = require('browser-request'),
        store = require("../location");

    it("is an object", function(){
        expect(store).toBeObject;
    });
    
    
    it("has a read method", function(){
        expect(store).toHaveMethod("read");
    });
    
    describe(".read", function(){
        it("returns the current state of LocationStore", function(){
            expect( store.read() ).toBeEmptyArray();
        });
    });
    
    
    it("has an onResolve method", function(){
        expect(store).toHaveMethod("onResolve");
    });
    
    describe(".onResolve", function(){
        var coords = [0, 1];
        
        it("assigns its argument to LocationStore state", function(){
            store.onResolve(coords);
            
            expect( store.read() ).toBe(coords);
        });
    });
    
    
    it("has a handleDefault method", function(){
        expect(store).toHaveMethod("handleDefault");
    });
    
    describe(".handleDefault", function(){
        it("requests client IP geocoordinates from freegeoip.net", function(){
            store.handleDefault();
            expect(request).toBeCalledWith('http://freegeoip.net/json/', function(){} );
        });
    });
});
