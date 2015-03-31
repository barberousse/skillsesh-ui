var React = require('react/addons'),
    Link = require('react-router').Link;

module.exports = React.createClass({
        render: function render(){
            return (
                <div className="card-action">
                    <div className="row">
                        <div className="col s12 offset-m1 m3">
                            <Link to="Profile" params={ {shortname: "jeff"} }>
                                Read about {this.props.firstName}
                            </Link>
                        </div>
                        <div className="col s12 m3">
                            <a href="#">
                                Book a Session!
                            </a>
                        </div>
                    </div>
                </div>
            );
        }
    });
