var React = require('react/addons'),
    Navigation = require('./components/navigation'),
    Home = require('./pages/home'),
    Profile = require('./pages/profile'),
    DefaultRoute = require('react-router').DefaultRoute,
    Route = require('react-router').Route;

module.exports = (
            <Route name="Home" handler={Navigation} path="/">
                <Route name="Profile" handler={Profile} path="profile/:shortname" />
                <DefaultRoute handler={Home} />
            </Route>
        );
