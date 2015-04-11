var Firebase = require('firebase'),
    Geofire = require('geofire'),
    Root = new Firebase('https://skillsesh.firebaseio.com'),
    Members = Root.child('members'),
    Profiles = Root.child('profiles');

module.exports = {
    Root,
    Members,
    Profiles,
    Geofire
};