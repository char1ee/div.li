#!/usr/bin/env node
var $Http 	= require('http');
var $Util 	= require('util');
var $Url 	= require('url');
var $Injector = require('./injector.js');
var MULTI_PATH_SPLIT = /\/{1,}/;
var PACKAGE_NAME = /^(?:[a-z\-]+)$/;
function resolveRequest (req) {
	var reqUrl 		= $Url.parse(req.url);
	var reqPath 	= reqUrl.pathname.split(MULTI_PATH_SPLIT).slice(1);
	var reqQuery 	= reqUrl.query;
	var reqHeaders 	= req.headers;
	var reqMethod	= req.method;
	var isPackage 	= PACKAGE_NAME.test(reqPath[0]);
	if (isPackage) {
		
	}
	console.log(reqPath, reqQuery, reqHeaders, reqMethod);
	return {};
};
function resolveResponse (res) {
	
};
function handle(req, res) {
	// 二次封装请求信息
	var $req = resolveRequest(req);
	// 二次封装返回方法
	var $res = resolveResponse(res);
	// 从信息中获取路由和参数
	// $Injector()
	// var handle = function (status, info) {
	// 	this.emit(status, info);
	// };
	// handle.bind(this);
	// var reqUrl 		= req.url;
	// var reqHeaders 	= req.headers;
	// var reqMethod 	= req.method;
	// var method 		= '$get';
	// if (reqMethod == 'POST') {
	// 	method 		= '$set';
	// }
	// console.log(reqMethod, reqHeaders);
	res.writeHead(200, {
		 'Set-Cookie':'div=li; expires='+new Date(new Date().getTime()+86409000).toUTCString()
	});
	res.write('<!DOCTYPE html><html><head><link rel="shortcut icon" href="/favicon.ico"></head><body>test</body></html>');
	res.end();
};
function Servlet (root, port) {
	this.start(root, port);
};
Servlet.prototype.mime 	= require(__dirname + '/../config/mime.json');
Servlet.prototype.port = 8000;
Servlet.prototype.root = __dirname + '/../dist';
Servlet.prototype.start = function (root, port) {
	this.root = root || this.root;
	this.port = port || this.port;
	this.server = $Http.createServer(handle.bind(this)).listen(this.port);
	$Util.puts('System started @localhost:' + this.port);
};
new Servlet();
// exports.start = function (root, port) {
// 	new Servlet(root,port);
// };