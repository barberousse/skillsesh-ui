var React = require('react/addons');

module.exports = React.createClass({
      render: function render(){
          return (
              <div className="row card-content">
                <div className="col s1">
                    <span className="card-title">
                        {this.props.firstName}
                    </span>
                </div>
                <div className="col offset-s1 s9 ">
                    <p>
                        {this.props.bio}
                    </p>
                </div>
              </div>
          );
      }
});
