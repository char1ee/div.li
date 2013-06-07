/**
 * dom:
	<div class="-slide">
		<div class="-slide-wrap">
			<ul class="-slide-list">
				<li style="background:#f00">
					<div style="height:200px">0</div>
				</li>
				<li style="background:#f00">
					<div style="height:200px">1</div>
				</li>
				<li style="background:#f00">
					<div style="height:200px">2</div>
				</li>
			</ul>
			<div class="-slide-control">
				<span>a</span>
				<span>b</span>
				<span>c</span>
			</div>
			<div class="-slide-btn-prev">上</div>
			<div class="-slide-btn-next">下</div>
		</div>
	</div>
 */

define(function(require, exports,module){
	var $ = require('$');
	var defaults = {
		el:'.-slide',
		autoScroll:false,
		zindex:100,
		// step:'200',
		loopBody: '.-slide-list',
		direction:'vertical',
		// direction:'horizontal',
		dissolve: {
			selector: '.d-img-list',
			curClass: 'current'
		},
		control: {
			selector: '.-slide-control',
			curClass: 'current'
		},
		curClass: 'current',
		speed: 400,
		gap: 5000,
		next: '.-slide-btn-next',
		prev: '.-slide-btn-prev',
		contentDiv: '.f-content',
		botton: {
			selector: '.focus-btns',
			curClass: 'on'
		}
	};
	var Slide = function(parms){
		var me = this,
			cfg = {};
		me.cfg = cfg;
		$.extend(cfg, defaults, parms);
		//当前slide索引值
		me._i = 0;
		//总slide张数
		me._l = me.cfg.length || $(me.cfg.loopBody).find('li').length;
		me.step = me.cfg.step || (function(){
			if(me.cfg.direction === 'horizontal'){ //水平方向滚动， 取width;
				return $(me.cfg.loopBody).find('li:eq(0)').outerWidth();
			}else{
				return $(me.cfg.loopBody).find('li:eq(0)').outerHeight();
			}
		})();
	}
	Slide.fn = Slide.prototype = {
		init:function(){
			var me = this;
			if(me.cfg.direction == 'horizontal'){
				$(me.cfg.loopBody).outerWidth(me._l *me.step);
				$(me.cfg.loopBody).find('>').each(function(){
					$(this).outerWidth(500);
				})
			}
			me._controlHandler();
			me._nextHandler();
			me._prevHandler();
			if(me.cfg.autoScroll){
				me._mouseHandler();
				me._loop();
			}
			return me;
		},

		_getCurrentIndex: function(){
			return this._i
		},
		_addIndex : function(callback){
			this._i++;
			if(this._i >= this._l){
				this._i = 0;
			};
			callback(this._i);
		},
		_plusIndex:function(callback){
			this._i--;
			if(this._i < 0){
				this._i = this._l - 1;
			}
			callback(this._i);
		},

		next:function(callback){
			var me = this;
			me._addIndex(function(i){
				me.go(i, callback);
			});
			return me;
		},

		prev:function(callback){
			var me = this;
			me._plusIndex(function(i){
				me.go(i, callback);
			});
			return me;
		},

		go:function(n, callback){
			var me = this;
			var cases = {
				horizontal:'marginLeft',
				vertical:'marginTop',
			},
				css = {};
			css[cases[me.cfg.direction]] = - n * this.step;
			$(me.cfg.loopBody).animate(css, me.cfg.speed, callback);
			return me;
		},

		_controlHandler:function(){
			var me = this;
			$(me.cfg.control.selector).find('>')
				.each(function(i){
					$(this).on('click', function(e){
						var $this = $(this);
						me.go(i, function(){
							var cls = me.cfg.control.curClass;
							$this
							.addClass(cls)
							.siblings()
							.removeClass(cls)
						})
					})
				})
		},

		_nextHandler:function(){
			var me = this;
			$(me.cfg.next).on('click', function(e){
				var $this = $(this);
				me.next(function(){
				});
			});
		},

		_prevHandler:function(){
			var me = this;
			$(me.cfg.prev).on('click', function(e){
				me.prev();
			});
		},

		_isStop: false,

		_mouseHandler:function(){
			var me = this;
			$(me.cfg.el).on({
				mouseenter : function(){
					me._isStop = true;
				},
				mouseleave:function(){
					me._isStop = false;
					me._loop(0);
				}
			})
		},

		_loop:function(t){
			var me = this;
			setTimeout(function __loop(){
				!me._isStop && me.next(function(){
					setTimeout(__loop, me.cfg.gap)
				});
			}, t || me.cfg.gap)
		}
	}
	module.exports = Slide;
});

