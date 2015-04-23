var fluxStore = require('flux-store'),
    dispatcher = require('../dispatcher'),
    actionTypes = require('../constants').actionTypes,
    userStore = require('./user'),
    fb = require('../data/firenext'),
    locations = require('../data/geofire'),
    uuid = require('uuid');

var {   GET_PROFILE,
        CREATE_PROFILE,
        UPDATE_PROFILE,
        REMOVE_PROFILE
    } = actionTypes;

var _profile = _profile || null;


var store = fluxStore.extend({ 
    dispatcher, 
    onDispatcherAction(payload){
        var action = payload.action,
            profiles = fb.child('profiles');

        switch (action.type) {
            case CREATE_PROFILE:
                profiles
                    .child( uuid.v4() )
                    .set( action.data )
                    .then( this.setResult );
                break;  
            case GET_PROFILE:
                profiles
                    .child(action.data)
                    .once('value', this.setResult, this); // Will this really be available for waitFor? 
                break;
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