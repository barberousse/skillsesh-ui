var React = require('react/addons'),
    DefaultRoute = require('react-router').DefaultRoute,
    Route = require('react-router').Route,
    Navigation = require('../components/navigation.jsx'),
    Home = require('./home.jsx'),
    Profile = require('./profile.jsx');

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
