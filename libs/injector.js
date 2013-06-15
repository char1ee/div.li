#!/usr/bin/env node
/**
 * this is an injector for routers and the routers will call the ctrls
 */
var FN_ARGS = /^function\s*[^\(]*\(\s*([^\)]*)\)/m;      // 获取参数的 argumrnts 名
var FN_ARG_SPLIT = /,/;                                  // 参数分隔符号
var FN_ARG = /^\s*(_?)(\S+?)\1\s*$/;
var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg; // 无视注释

/**
 * get the function's args
 * @param  {Function} fn an normal function
 * @return {[type]}      the list for args wait to replaced by value
 */
function annotate (fn) {
  var argDecl = fn.toString().replace(STRIP_COMMENTS, '').match(FN_ARGS);
  if (!argDecl) return [];
  return argDecl[1].split(FN_ARG_SPLIT).map(function (arg) {
    return arg.trim();
  });
};
/**
 * mix the target from source, if no value in source, we can use the default value in target.
 * @param  {[type]} target [description]
 * @param  {[type]} source [description]
 * @return {[type]}        [description]
 */
function mix (target, source) {
  var res = Object.create(target);
  for (var i in source) {
    var s = source[i];
    if(s !== undefined) {
      res[i] = s;
    }
  };
  return res;
};

/**
 * inject the func
 * @param  {Function} fn target function with injector, default value and args
 * @return {[type]}      new function be injected
 */
function inject (fn, $injector, binder) {
  var $injector = $injector || fn.$injector || {};
  var $dft = fn.$dft || {};
  var binder = binder || {};
  var keys = annotate(fn);
  var vals = mix($dft, $injector);
  var args = keys.map(function (i) {
    return vals[i];
  });
  return function () {
    fn.apply(binder, args);
  };
};

function injector (fn, $injector, binder) {
  return inject(fn, $injector, binder);
};

injector.inject = inject;
module.exports = injector;