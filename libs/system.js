#!/usr/bin/env node

var $Server = require('./server.js');
var $Builder = require('./build.js');
var $Initial = require('./initial.js');
exports.init = $Initial.start;
exports.build = $Builder.start;
exports.start = $Server.start;