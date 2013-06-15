#!/usr/bin/env node
var $Injector = require('./injector.js');
var async = require('./injector.test.sync.js');
function sync (a, b, c) {
  console.log('\nThe sync func:','\na:', a, '\nb:',b, '\nc: ',c, '\nthis:', this);
};
sync.$dft = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
sync.$injector = {
  a:100,
  e: 30
};
$Injector(sync)();
$Injector(async.div)();