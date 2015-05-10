var React = require('react/addons'),
    Card = require('./card');

module.exports = React.createClass({
    getDefaultProps: function() {
        return { results: [
            {
                guid: "001",
                avatar: "https://randomuser.me/api/portraits/men/59.jpg",
                firstName: "Jeff",
                bio: "Occupy literally pork belly sustainable blog Pitchfork, bespoke art party Brooklyn Truffaut you probably haven't heard of them selvage ugh cornhole salvia. Tousled distillery tilde twee. Selvage keffiyeh freegan, deep v hella trust fund crucifix Etsy ennui pug seitan."
            },
            {
                guid: "002",
                avatar: "https://randomuser.me/api/portraits/men/60.jpg",
                firstName: "Mark",
                bio: "Occupy literally pork belly sustainable blog Pitchfork, bespoke art party Brooklyn Truffaut you probably haven't heard of them selvage ugh cornhole salvia. Tousled distillery tilde twee. Selvage keffiyeh freegan, deep v hella trust fund crucifix Etsy ennui pug seitan."
            }
        ]};
    },
    render: function() {
        var results = this.props.results;
        console.log(typeof this.props.results);

        return (
            <div className="results-container">
                { results.map( function(user) { return <Card key={user.guid} user={user} />; } ) }
            </div>
        );
    }
});
