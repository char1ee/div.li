/**
 * 记录当前链接的顺序，在本地做永久存储
 */
define(function(require, exports){
	var $ = require('$'),
		memory = require('../../plugin/memory/memory').memory;

	var nActive = memory.get('subnav'),
		$nav = $('.m-nav-vertical'),
		nav = {
		init : function(){
			$nav.find('> li li')
				.eq(nActive)
				.addClass('active')
			.parents('li').addClass('down');
			this._mouseHandler();

			$nav.find('> li > :first-child').on('click', function(){
				var $this = $(this);
				$this.parent('li').toggleClass('down');
			});
		},
		memory:function(n){
			memory.set('subnav', n)
		},
		_mouseHandler: function(){
			var me = this;
			$nav.find('> li li').on('mousedown', function(e){
				me.memory($(this).index());
			})
		}
	}

	exports.nav = nav;
});