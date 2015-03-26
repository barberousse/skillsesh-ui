var React = require('react');

module.exports = React.createClass({
        getDefaultProps: function(){
            return {avatar: "https://randomuser.me/api/portraits/men/59.jpg"};
        },
        render: function render(){
            return (
                <div className="card-image">
                    <img src={this.props.avatar} className="responsive-img circle" />
                </div>
                );
        }
    });