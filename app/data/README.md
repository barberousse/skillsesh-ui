# Data

The Data module communicates only with the stores and reveals a repository API for them to interact with. It resolves queries with a knowledge of the steps necessary to resolve them, but not the behavior, by eventing modules tasked with retrieving some unit of data. The Data module ensures all necessary modules have returned before composing the accumulated values into a result the calling store is interested in.

## Usage
```javascript
// search-store.js
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
    onDispatcherAction: function(payload) {
        var location,
            skills,
            results;

        if ( payload.action.type !== 'query')
            return;

        { location, skills }  = payload.action.data;

        // Returns an array of user profiles that match 
        // at least one of the members of skills
        _results = Data.profiles({ location, skills });
        this.emitChange();    
    };

module.exports = Store;
```

## API

### `Data.profiles(location, skills)`
Find profiles matching at least one of the skills in `skills` within a 20 mile radius of `location`. Returns an iterator mapped to objects fit for populating search results.

### `Data.member(shortname)`
Find a specific member by their `shortname`. Returns a user object fit for populating a profile page.