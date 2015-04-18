var { Members, Profiles } = require('./adapters/firebase');

const NOTFOUND = Object.create(Error.prototype, { 
    name: { value: 'NotFoundError' }, 
    message: { value: "That username doesn't belong to anyone" }
}),
    WRONGARGUMENT = Object.create(Error.prototype, {
    name: { value: 'ArgumentError' },
    message: { value: 'Argument was not type Object' }
}),
    WRONGVALUE = Object.create(Error.prototype, {
    name: { value: 'TypeError' },
    message: { value: 'Property "shortname" was not type String' }
});

module.exports = {
    members: {
        find: function({ shortname }) {
            if ( Object.is(shortname, undefined) ) throw WRONGARGUMENT;
            if ( !(shortname).length || shortname.isArray ) throw WRONGVALUE;
            
            return new Promise( function(resolve, reject) {
                Members.child(shortname).once('value', function(node) {
                    if ( !node.exists() ) reject(NOTFOUND);
                    resolve(node.val());
                });
            } );
        },
        where: function({ firstName, lastName, zipcode}) {
            return;
        }
    },
    profiles: {
        find: function({ guid }) {
            return;
        },
        where: function({ within, from, skills }) {}
    }
};