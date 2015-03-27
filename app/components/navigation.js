var React = require('react'),
    Header = require('./header'),
    Footer = require('./footer'),
    RouteHandler = require('react-router').RouteHandler;
    
module.exports = React.createClass({
        contextTypes: {
            router: React.PropTypes.func
        },
        render: function(){
            return (
                <div className="outer-container">
                    <Header />
                    <div className="container">
                        <RouteHandler />
                    </div>
                    <Footer />
                </div>
            );
        }
    });