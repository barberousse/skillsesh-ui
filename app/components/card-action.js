var React = require('react/addons');

module.exports = React.createClass({
        render: function render(){
            return (
                <div className="card-action">
                    <div className="row">
                        <div className="col s12 offset-m1 m3">
                            <a href="#" className="">
                                Read about {this.props.firstName}
                            </a>
                        </div>
                        <div className="col s12 m3">
                            <a href="#" className="">
                                Book a Session!
                            </a>
                        </div>
                    </div>
                </div>
            );
        }
    });
