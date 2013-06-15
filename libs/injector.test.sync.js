#!/usr/bin/env node
function async (a, b, c) {
  console.log('\nThe async func:','\na:', a, '\nb:',b, '\nc: ',c, '\nthis:', this);
};
async.$dft = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
async.$injector = {
  a:100,
  e: 30
};
exports.div = async;