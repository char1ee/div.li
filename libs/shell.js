#!/usr/bin/env node
var $Util = require('util');
var $ChildProcess = require('child_process');
var $CurrentPath = __dirname;
var $RootPath = process.cwd();
var $PREFIX$ = '$path$';
var $A = [];
$A.$join = function (arrayLike, str) {
	return this.join.call(arrayLike, str);
};
var reEndWithBoolean = /(?:true|false)\s*$/;
function puts (error, stdout, stderr) {
	if (error) {
		$Util.puts(error);
		$Util.puts(stderr);
	} else {
		$Util.puts(stdout);
	}
};
function compose(path, absolute) {
	return path.replace($PREFIX$, absolute ? $RootPath : $CurrentPath);
};
function exec (str, absolute) {
	$ChildProcess.exec(compose(str, absolute), puts);
};
function resolve (cmd, arrayLike) {
	var str = $A.$join(arrayLike, ' ');
	var absolute = str.match(reEndWithBoolean);
	absolute = absolute ? absolute[0] == 'true' : false;
	str = compose(str, absolute).replace(reEndWithBoolean,'');
	return cmd + ' ' + str;
};
function execFile() {
	exec(resolve('sh', arguments));
};
function spawn (cmd, argv, absolute) {
	argv.push(!!absolute);
	exec(resolve(cmd, argv));
};
exports.resolve = resolve;
exports.exec = exec;
exports.execFile = execFile;
exports.spawn = spawn;