var React = require('react/addons');

module.exports = React.createClass({
    render: function() {
        return (
            <div className="row">
                <div className="col offset-s2 s8">
                    <div className="card red lighten-2">
                        <div className="card-content">
                            <span className="card-title grey-text text-darken-4">
                                {this.props.skill.name}
                            </span>
                            <p className="grey-text text-lighten-5">
                                {this.props.skill.statement}
                            </p>
                        </div>
                        <div className="card-action grey-text text-lighten-5">
                            <a href="#">
                                Book a session!
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
