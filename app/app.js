var React = require('react'),
    Router = require('react-router'),
    Dispatcher = require('flux').Dispatcher,
    UserStore = require('./stores/user'),
    routes = require('./routes');
    
// Hook the Stores up to the Dispatcher
//Dispatcher.register(UserStore( {actionType: 'console-log'} ));

// Start the Router
Router.run( routes, Router.HistoryLocation, function(Handler){
    // Render the current the URL state
    React.render( (<Handler />), document.querySelector('.react-container') );
});