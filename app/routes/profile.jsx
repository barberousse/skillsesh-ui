var React = require('react/addons'),
    CardImage = require('../components/card-image'),
    RelatedUser = require('../components/related-user'),
    SkillCard = require('../components/skill-card');

module.exports = React.createClass({
    getDefaultProps: function() {
        return {
            profile: {
                avatar: "https://randomuser.me/api/portraits/men/59.jpg",
                firstName: "Jeff",
                lastName: "Atwood",
                bio: "Occupy literally pork belly sustainable blog Pitchfork, bespoke art party Brooklyn Truffaut you probably haven't heard of them selvage ugh cornhole salvia. Tousled distillery tilde twee. Selvage keffiyeh freegan, deep v hella trust fund crucifix Etsy ennui pug seitan. Occupy literally pork belly sustainable blog Pitchfork, bespoke art party Brooklyn Truffaut you probably haven't heard of them selvage ugh cornhole salvia. Tousled distillery tilde twee.",
                skills: [
                    { name: "Dancing", expertise: "Intermediate", statement: "Meditation ennui sriracha, jean shorts cliche shabby chic Neutra Echo Park. Tilde actually wolf hoodie freegan dreamcatcher. Mlkshk meh tattooed, typewriter master cleanse kogi 8-bit."},
                    { name: "French", expertise: "Intermediate", statement: "Blue Bottle chillwave butcher, Thundercats Brooklyn American Apparel +1 health goth wolf literally tousled polaroid church-key try-hard stumptown. Twee Austin hoodie tattooed blog. Mustache farm-to-table art party food truck crucifix, Shoreditch readymade. Trust fund Schlitz 8-bit yr gentrify bicycle rights."},
                    { name: "Javascript", expertise: "Intermediate", statement: "Authentic flexitarian tote bag, banjo 90's roof party sriracha kogi locavore aesthetic PBR&B hella literally cornhole semiotics. Irony hella cornhole, cold-pressed Carles salvia vegan you probably haven't heard of them Godard. Four dollar toast cold-pressed DIY, YOLO cornhole small batch plaid +1 meggings."}
                ]
            },
            related: [
                {firstName: "John", avatar: "https://randomuser.me/api/portraits/men/55.jpg"},
                {firstName: "Michael", avatar: "https://randomuser.me/api/portraits/women/26.jpg"},
                {firstName: "Innocencia", avatar: "https://randomuser.me/api/portraits/women/44.jpg"},
                {firstName: "Leighanna", avatar: "https://randomuser.me/api/portraits/women/77.jpg"}
            ]
        };
    },
    contextTypes: {
        router: React.PropTypes.func
    },
    render: function() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <div className="row">
                            <div className="col s4">
                                <CardImage avatar={this.props.profile.avatar} />
                            </div>
                            <div className="col offset-s2 s4">
                                <h2>{this.props.profile.firstName}</h2>
                                <h2>{this.props.profile.lastName}</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12">
                                <p className="flow-text">
                                    {this.props.profile.bio}
                                </p>
                            </div>
                        </div>
                        {
                            this.props.profile.skills.map(function(skill) {
                                return <SkillCard skill={skill} />;
                            })
                        }
                        <div className="row">
                            <div className="col s12">
                                <h4>
                                    Also like {this.props.profile.firstName}:
                                </h4>
                            </div>
                        </div>
                        <div className="row">
                            { this.props.related.map( function(profile){ return <RelatedUser avatar={profile.avatar} name={profile.firstName} />; } ) }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
