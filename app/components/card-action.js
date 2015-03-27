var React = require('react/addons');

module.exports = React.createClass({
        getDefaultProps: function render(){
            return {
                firstName: "Jeff"
            };
        },
        render: function render(){
            return (
                <div className="card-action">
                    <a href="#">
                        Read about {this.props.firstName}
                    </a>
                    <a href="#">
                        Book a Session!
                    </a>
                </div>
            );
        }
    });
