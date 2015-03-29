var React = require('react/addons'),
    CardImage = require('./card-image'),
    CardContent = require('./card-content'),
    CardAction = require('./card-action');

module.exports = React.createClass({
        render: function(){
            return (
                <div className="row">
                    <div className="col s12">
                        <div className="row card valign">
                            <div className="col s4 m2">
                                <div className="row">
                                    <div className="col s12">
                                        <CardImage avatar={this.props.user.avatar} />
                                    </div>
                                </div>
                            </div>
                            <div className="col s12 m10">
                                <CardContent firstName={this.props.user.firstName} bio={this.props.user.bio} />
                            </div>
                            <div className="col s12">
                                <CardAction firstName={this.props.user.firstName} />
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    });
