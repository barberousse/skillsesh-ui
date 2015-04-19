var mirror = require('keymirror');

module.exports = { 
	actionTypes: mirror({
		SET_LOCATION: null,
        SET_PROXY_LOCATION: null,
        GET_PROFILE: null,
        QUERY_PROFILES: null,
        SET_PROFILE: null
	})
}
