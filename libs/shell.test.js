#!/usr/bin/env node
var $Shell = require('./shell.js');
$Shell.exec('sh $path$/test.sh div li');
$Shell.execFile('$path$/test.sh', 'div', 'li');
$Shell.spawn('sh', ['$path$/test.sh', 'div', 'li']);
