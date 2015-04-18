require("babel/register");
global.XMLHttpRequest = require('xmlhttprequest');

var REPL = require('repl'),
    stores = require('../app/stores'),
    constants = require('../app/constants'),
    dispatcher = require('../app/dispatcher'),
    data = require('../app/data');

var ReplServer = REPL.start({prompt: '$ '});

ReplServer.context.stores = stores;
ReplServer.context.dispatcher = dispatcher;
ReplServer.context.data = data;
ReplServer.context.constants = constants;