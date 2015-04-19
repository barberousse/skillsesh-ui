var snapshotMock,
    referenceMock,
    json;

referenceMock = {
    child(){
        return {
            once(type, cb, context) {
                cb.call(context, snapshotMock);
            }
        };
    },
    __setJson(val) {
        json = val === null ? null : JSON.stringify(val);
    }
};

snapshotMock = {
    exists() {
        return json ? true : false;
    },
    val() {
        return json;
    }
};

module.exports = referenceMock;