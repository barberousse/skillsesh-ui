require("babel/register");

var REPL = require('repl'),
    stores = require('./app/stores'),
    actions = require('./app/actions'),
    dispatcher = require('./app/dispatcher'),
    data = require('./app/data');

var ReplServer = REPL.start({prompt: '$ '});

ReplServer.context.stores = stores;
ReplServer.context.dispatcher = dispatcher;
ReplServer.context.data = data;
ReplServer.context.actions = actions;