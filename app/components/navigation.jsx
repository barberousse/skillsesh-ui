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
                    <ul className="side-nav" id="SideNav">
                        <li>
                            <a href="about">About</a>
                        </li>
                        <li>
                            <a href="faq">FAQ</a>
                        </li>
                        <li>
                            <a href="contact">Contact</a>
                        </li>
                    </ul>
                    <Header />
                    <RouteHandler />
                    <Footer />
                </div>
            );
        }
    });
