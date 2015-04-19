var Firebase = require('firebase'),
    Geofire = require('geofire'),
    firebase = new Firebase('https://skillsesh.firebaseio.com'),
    geofire = new Geofire( firebase.child('locations') );

module.exports = geofire;