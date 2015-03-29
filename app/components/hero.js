var React = require('react/addons'),
    Prompt = require('../components/landing-prompt'),
    Search = require('../components/search');

module.exports = React.createClass({
    render: function() {
        return (
            <div className="row">
                <div className="col s12 offset-s2">
                    <div className="valign-wrapper">
                        <div className="hero valign">
                            <Prompt />
                            <Search />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
