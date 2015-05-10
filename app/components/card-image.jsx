var React = require('react/addons');

module.exports = React.createClass({
        render: function render(){
            return (
                <img src={this.props.avatar} className="circle responsive-img" />
                );
        }
    });
