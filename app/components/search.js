var React = require('react/addons'),
    Typeahead = require('react-typeahead').Typeahead;

module.exports = React.createClass({
    render: function() {
        return (
            <div className="row">
                <div className="col s12 input-field">
                    <div className="input-field">
                        <Typeahead options={["janet", "pete", "may", "jason"]}/>
                    </div>
                </div>
            </div>
        );
    }
});
