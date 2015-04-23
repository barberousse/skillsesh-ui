var mirror = require('keymirror');

module.exports = { 
	actionTypes: mirror({
		UPDATE_LOCATION:             null,
        GET_PROFILE:                 null,
        CREATE_PROFILE:              null,
        UPDATE_PROFILE:              null,
        REMOVE_PROFILE:              null,
        QUERY_PROFILES:              null,
	})
}
