/**
 * 记录当前链接的顺序，在本地做永久存储
 */
define(function(require, exports){
	var $ = require('$'),
		memory = require('../../plugin/memory/memory').memory;

	var nActive = $('.i-home').length ? 0 : (memory.get('mainnav') || 0);
	var $nav = $('.i-main-nav');
	var nav = {
		init : function(){
			$nav.find('.m-nav-top > li')
				.eq(nActive)
				.addClass('active');
			this._mouseHandler();
		},
		memory:function(n){
			memory.set('mainnav', n)
		},
		_mouseHandler: function(){
			var me = this;
			$nav.find('.m-nav-top > li').on('mousedown', function(e){
				me.memory($(this).index());
			})
		}
	}

	exports.nav = nav;
});