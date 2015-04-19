var fluxStore = require('flux-store'),
    dispatcher = require('../dispatcher'),
    userStore = require('./user'),
    fb = require('../data/firenext'),
    locations = require('../data/geofire'),
    uuid = require('uuid'),
    {SET_PROFILE, GET_PROFILE, QUERY_PROFILES} = require('../constants').actionTypes;

var _profile = _profile || null;


var store = fluxStore.extend({ 
    dispatcher, 
    onDispatcherAction(payload){
        var action = payload.action;

        switch (action.type) {
            case SET_PROFILE:
                break;
            case GET_PROFILE:
                console.log(action.data);
                locations.child(action.data).once('value', this.setResult, this);
            default:
                break;
        }

        return true;
    },
    getProfile(){
        return _profile;
    },
    setResult(node){
        _profile = node.exists() ? JSON.parse( node.val() ) : null;
        this.emitChange();
    }
});

module.exports = store;