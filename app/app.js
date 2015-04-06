var React = require('react/addons'),
    Router = require('react-router'),
    routes = require('./routes');


// Start the Router
Router.run( routes.draw(), Router.HistoryLocation, function(Handler){
    // Render the current the URL state
    React.render( (<Handler />), document.querySelector('.react-container') );
});
