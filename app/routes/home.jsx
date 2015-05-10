var React = require('react/addons'),
    Hero = require('../components/hero'),
    SearchResults = require('../components/search-results');

module.exports = React.createClass({
    render: function() {
        return (
            <div className="hero-container">
                <Hero />
                <div className="container">
                    <SearchResults />
                </div>
            </div>
        );
    }
});
