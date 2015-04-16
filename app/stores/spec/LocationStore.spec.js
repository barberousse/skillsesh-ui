jest.dontMock('flux-store');

describe("A LocationStore", function(){
    var store = require("../location");

    it("is an object", function(){
        expect(store).toBeObject();
    });
});
