var FluxStore = require('flux-store'),
    Dispatcher = require('../dispatcher'),
    request = require('browser-request'),
    {ActionTypes} = require('../constants');

var _loc = _loc || [];

var store = FluxStore.extend({
    dispatcher: Dispatcher,
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
    onDispatcherAction: function(action) {
        if (action.type !== ActionTypes.SET_LOCATION) return;
        if (!action.data) {
            this.handleDefault();
            return;
        }
        
        this.onResolve(action.data);
    },
    read: function(){
        return _loc;
    }
});

module.exports = store;
