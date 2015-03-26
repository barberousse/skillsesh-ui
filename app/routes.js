var React = require('react'),
    Navigation = require('./components/navigation'),
    Card = require('./components/card'),
    DefaultRoute = require('react-router').DefaultRoute,
    Route = require('react-router').Route;

module.exports = (
            <Route name="Navigation" handler={Navigation} path="/">
                <DefaultRoute handler={Card} />
            </Route>
        );