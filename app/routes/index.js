var React = require('react/addons'),
    DefaultRoute = require('react-router').DefaultRoute,
    Route = require('react-router').Route,
    Navigation = require('../components/navigation'),
    Home = require('./home'),
    Profile = require('./profile');

module.exports = {
    Home,
    Profile,
    draw: function() {
        return (
            <Route name="Home" handler={Navigation} path="/">
                <Route name="Profile" handler={Profile} path="profile/:shortname" />
                <DefaultRoute handler={Home} />
            </Route>
        );
    }
}
