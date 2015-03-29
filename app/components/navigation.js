var React = require('react/addons'),
    Header = require('./header'),
    Footer = require('./footer'),
    RouteHandler = require('react-router').RouteHandler;

module.exports = React.createClass({
        contextTypes: {
            router: React.PropTypes.func
        },
        render: function(){
            return (
                <div className="app-container">
                    <Header />
                    <RouteHandler />
                    <Footer />
                </div>
            );
        }
    });
