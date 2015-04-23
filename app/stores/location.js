var fluxStore = require('flux-store'),
    dispatcher = require('../dispatcher'),
    request = require('browser-request'),
    {actionTypes} = require('../constants'),
    {UPDATE_LOCATION} = actionTypes;

var _loc = _loc || [];

var store = fluxStore.extend({
    dispatcher,
    onResolve: function(coords) {
        if ( !Array.isArray(coords) ) return;
        
        _loc = coords;
        this.emitChange();
    },
    handleDefault: function(){
        var _promise = new Promise( function(resolve, reject) {
            request('http://freegeoip.net/json/', function(err, res, data) {
                var json,
                    coords;
                
                if (err) reject(err);
                
                json = JSON.parse(data);
                resolve( [json.latitude, json.longitude] );
            });
        });
        
        _promise.then(this.onResolve);
    },
    onDispatcherAction: function(payload) {
        var action = payload.action;

        switch (action.type){
            case UPDATE_LOCATION:
                action.data ? this.onResolve(action.data) : this.handleDefault();
                break;
        }
        
        return true;
    },
    getLocation: function(){
        return _loc;
    }
});

module.exports = store;
