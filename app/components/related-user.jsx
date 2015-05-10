var React = require('react'),
    CardImage = require('./card-image');

module.exports = React.createClass({
    render: function() {
        return (
            <div className="col offset-s1 s2">
                <div className="row">
                    <div className="col s12">
                        <CardImage avatar={this.props.avatar} />
                    </div>
                    <div className="col offset-s2 s8">
                        <h5>
                            {this.props.name}
                        </h5>
                    </div>
                </div>
            </div>
        );
    }
});
