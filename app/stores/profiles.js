var FluxStore = require('flux-store'),
    Dispatcher = require('../dispatcher'),
    Constants = require('../constants'),
    ActionTypes = Constants.ActionTypes;

var _results = _results || [];

var Store = FluxStore.extend({
    dispatcher: Dispatcher,
    getResults: function() {
        return _results;
    },
    onData: function(data) {
        _results = data;
    },
    onDispatcherAction: function(payload) {
        var location,
            skills,
            results;

        if ( payload.action.type !== 'query')
            return;

        { location, skills }  = payload.action.data;

        // Returns an iterator of user profiles to callback 
        // that match at least one of the members of skills
        Data.users.find({ location, skills }, this.onData);

        });

        this.emitChange();    
    });

module.exports = Store;