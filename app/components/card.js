var React = require('react'),
    CardImage = require('./card-image'),
    CardContent = require('./card-content'),
    CardAction = require('./card-action');

module.exports = React.createClass({
        render: function(){
            return (
                <div className="card blue">
                    <CardImage />
                    <CardContent />
                    <CardAction />
                </div>
            );
        }
    })