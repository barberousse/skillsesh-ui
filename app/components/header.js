var React =require('react');

module.exports = React.createClass({
        render: function render(){
            return (
                <div className="navbar-fixed">
                    <nav>
                        <div className="navbar-wrapper">
                            <a href="/" className="brand-logo">
                                Skillsesh
                            </a>
                            <a href="#" data-activates="SideNav" className="button-collapse">
                                <i className="mdi-navigation-menu" />
                            </a>
                            <ul className="top-nav right hide-on-med-and-down">
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
                        </div>
                    </nav>
                </div>
            );
        }
    });