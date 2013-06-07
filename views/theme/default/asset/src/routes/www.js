define(function(require, exports){
	exports.all = function(pathname){
		require('../module/nav/nav').nav.init(pathname);//为nav绑定事件
		require('../module/nav/nav-vertical').nav.init(pathname);//为nav绑定事件
		// //计算左右高度
		var $ = require('$');
		var bodyHeight = $('.layout-container').outerHeight() - $('.footer').outerHeight(),
			headerHeihgt = $('header:eq(0)').outerHeight(),
			topshowHeight = $('.m-topshow').outerHeight(),
			h = bodyHeight - headerHeihgt - topshowHeight;
		$('.i-article .m-nav-vertical').outerHeight(h);
		$('.i-article .m-entry').outerHeight(h);
	}

	exports.home = function(){
		var Slide = require('../module/slide/slide.js');
		var slide = new Slide().init({
			el:'.-slide',
			loopBody: '.f-img-list',
			dissolve: {
				selector: '.d-img-list',
				curClass: 'on'
			},
			control: {
				curClass: 'current',
				selector: '.focus-control'
			},
			curClass: 'on',
			speed: 400,
			gap: 5000,
			next: '.focus-btn-next',
			prev: '.focus-btn-prev',
			contentDiv: '.f-content',
			botton: {
				selector: '.focus-btns',
				curClass: 'on'
			}
		});

		localStorage.mainnav = 0;
		require('../module/focus/focus.js'); //焦点图
		window.webkitURL && console.log(
		'   _          ___\n'+
		'  (_)       /  __)\n'+
		'   _ _____ _| |__ ____ _____ _____\n'+
		'  | | ___ (_   __) ___) ___ | ___ |\n'+
		'  | | ____| | | | |   | ____| ____|\n'+
		'  |_|_____) |_| |_|   |_____)_____)\n'+
		'\n'+
		'我们喜欢用chrome查看代码的你，来吧，we need you! hr@div.li'
		);
	};
});