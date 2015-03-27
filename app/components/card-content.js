var React = require('react/addons');

module.exports = React.createClass({
      getDefaultProps: function(){
          return {
              firstName: "Jeff",
              bio: "Occupy literally pork belly sustainable blog Pitchfork, bespoke art party Brooklyn Truffaut you probably haven't heard of them selvage ugh cornhole salvia. Tousled distillery tilde twee. Selvage keffiyeh freegan, deep v hella trust fund crucifix Etsy ennui pug seitan."
          };
      },
      render: function render(){
          return (
            <div className="card-content">
                <span className="card-title">
                    {this.props.firstName}
                </span>
                <p>
                    {this.props.bio}
                </p>
            </div>
          );
      }
});
