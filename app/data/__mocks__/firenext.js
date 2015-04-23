var referenceMock = {},
    snapshotMock = {},
    json;

snapshotMock.exists = jest.genMockFn().mockImpl(function(){
        return json ? true : false;
});

snapshotMock.val = jest.genMockFn().mockImpl(function(){
    return json;
});

referenceMock.__setJson = function(val){
    json = val === null ? null : JSON.stringify(val);
};

referenceMock.child = jest.genMockFn().mockImpl(function(){ return this; });

referenceMock.set = jest.genMockFn().mockImpl(function(value, cb){
    json = value;
    return new Promise(function(resolve, reject){ resolve(json)});
})

referenceMock.once = jest.genMockFn().mockImpl(function(type, succCb, failCb, cntx){
    if (typeof failCb !== 'Function') cntx = failCb;

    succCb.call(cntx, snapshotMock);
});

module.exports = referenceMock;