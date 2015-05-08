require("babel/register");
// Workaround for browser-request depending on XMLHttpRequest
global.XMLHttpRequest = require('xmlhttprequest');

var REPL = require('repl'),
    stores = require('../app/stores'),
    constants = require('../app/constants'),
    dispatcher = require('../app/dispatcher'),
	firenext = require('../app/data/firenext'),
	geofire = require('../app/data/geofire'),
	build = require('./build'),
	ReplServer = REPL.start({prompt: '$ '});

ReplServer.context.stores = stores;
ReplServer.context.dispatcher = dispatcher;
ReplServer.context.firenext = firenext;
ReplServer.context.geofire = geofire;
ReplServer.context.constants = constants;
ReplServer.context.build = build;
