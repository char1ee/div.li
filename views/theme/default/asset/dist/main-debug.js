seajs.config({
    paths: {
        _path: "/asset/theme/default"
    },
    alias: {
        config: "_path/config",
        $: "_path/lib/jquery/jquery-1.9.1"
    }
});

// console && console.info('谁说企业项目不需要好前端？来吧，we need you hr@div.li');
define("arale/base/1.0.0/main-debug", [ "./router-debug", "./routes/www-debug", "./module/nav/nav-debug", "$-debug", "./module/focus/focus-debug.js", "config-debug", "./module/focus/js/jquery.focusbanner-debug.js", "./module/focus/js/jquery.easing.min-debug.js" ], function(require) {
    var router = require("./router-debug").router, www = require("./routes/www-debug");
    require("./module/focus/focus-debug");
    //焦点图
    alert("hello");
    router.get("*", www.all).get("/", www.index);
});

define("arale/base/1.0.0/router-debug", [], function(require, exports) {
    var router = {
        get: function(url, callback) {
            var pathname = document.location.pathname;
            if (url === "*") {
                callback(pathname);
            }
            if (typeof url === "string") {
                url === pathname && callback(pathname);
            }
            return this;
        }
    };
    exports.router = router;
});

define("arale/base/1.0.0/routes/www-debug", [ "../module/nav/nav-debug", "$-debug" ], function(require, exports) {
    var nav = require("../module/nav/nav-debug").nav;
    exports.all = function(pathname) {
        nav.init(pathname);
    };
    exports.index = function() {};
});

/**
 * 分析当前url 如果nav里的a的链接与url相等，
 * 认为当前nav为激活状态，加上 .active
 */
define("arale/base/1.0.0/module/nav/nav-debug", [ "$-debug" ], function(require, exports) {
    var $ = require("$-debug"), $nav = $(".m-nav");
    var nav = {
        init: function(pathname) {
            $nav.each(function() {
                $(this).find("a").filter('[href="' + pathname + '"]').addClass("active");
            });
        }
    };
    exports.nav = nav;
});

define("arale/base/1.0.0/module/focus/focus-debug", [ "config-debug", "$-debug", "./js/jquery.focusbanner-debug.js", "./js/jquery.easing.min-debug.js" ], function(require, exports) {
    var config = require("config-debug").config, DIR = config.THEME_ASSET_DIR;
    var $ = require("$-debug");
    require("./js/jquery.focusbanner-debug")($);
    $(".focus").html('<ul id="banner_img" class="f-img-list">' + '<li style="background:#fff">' + '<div class="-box-fluid">' + '<img src="' + DIR + '/module/focus/img/1-1.png" />' + "</div>" + "</li>" + '<li style="background:#fff">' + '<div class="-box-fluid">' + '<img src="' + DIR + '/module/focus/img/2-1.png" />' + "</div>" + "</li>" + '<li style="background:#fff">' + '<div class="-box-fluid">' + '<img src="' + DIR + '/module/focus/img/3-1.png" />' + "</div>" + "</li>" + '<li style="background:#fff">' + '<div class="-box-fluid">' + '<img src="' + DIR + '/module/focus/img/4-1.png" />' + "</div>" + "</li>" + '<li style="background:#fff">' + '<div class="-box-fluid">' + '<img src="' + DIR + '/module/focus/img/5-1.png" />' + "</div>" + "</li>" + "</ul>" + '<div class="f-b">' + '<div class="f-content" style="display: none;">' + '<div class="d-img-list-bg"></div>' + '<ul id="banner_content" class="d-img-list" >' + "<li>" + '<div class="-box-fluid">' + '<img src="' + DIR + '/module/focus/img/1-2.png" />' + "</div>" + "</li>" + "<li>" + '<div class="-box-fluid">' + '<img src="' + DIR + '/module/focus/img/2-2.png" />' + "</div>" + "</li>" + "<li>" + '<div class="-box-fluid">' + '<img src="' + DIR + '/module/focus/img/3-2.png" />' + "</div>" + "</li>" + "<li>" + '<div class="-box-fluid">' + '<img src="' + DIR + '/module/focus/img/4-2.png" />' + "</div>" + "</li>" + "<li>" + '<div class="-box-fluid">' + '<img src="' + DIR + '/module/focus/img/5-2.png" />' + "</div>" + "</li>" + "</ul>" + '<div id="banner_btn" class="focus-btns">' + '<a href="javascript:;"></a>' + '<a href="javascript:;"></a>' + '<a href="javascript:;"></a>' + "</div>" + "</div>" + "</div>" + '<div class="-box-fluid">' + '<div class="focus-control">' + '<span class="current"><img src="' + DIR + '/module/focus/img/1-3.png"></span>' + '<span><img src="' + DIR + '/module/focus/img/2-3.png"></span>' + '<span><img src="' + DIR + '/module/focus/img/3-3.png"></span>' + '<span><img src="' + DIR + '/module/focus/img/4-3.png"></span>' + '<span><img src="' + DIR + '/module/focus/img/5-3.png"></span>' + "</div>" + "</div>" + '<a href="javascript:;" class="focus-page-btn focus-btn-prev" hidefocus="true" style="display: none;"></a>' + '<a href="javascript:;" class="focus-page-btn focus-btn-next" hidefocus="true" style="display: none;"></a>' + '<div class="banner i-banner-index"></div>' + "</div>");
    $(".focus-page-btn").show();
    $(".f-content").show();
    $("#banner_img").find("li").eq(0).addClass("on");
    $("#banner_content").find("li").eq(0).addClass("on");
    $("#banner_btn").find("a").eq(0).addClass("on");
    $(".focus").focusbanner({
        loopBody: ".f-img-list",
        dissolve: {
            selector: ".d-img-list",
            curClass: "on"
        },
        control: {
            curClass: "current",
            selector: ".focus-control"
        },
        curClass: "on",
        speed: 300,
        gap: 5e6,
        next: ".focus-btn-next",
        prev: ".focus-btn-prev",
        contentDiv: ".f-content",
        botton: {
            selector: ".focus-btns",
            curClass: "on"
        }
    });
});

define("arale/base/1.0.0/module/focus/js/jquery.focusbanner-debug", [ "./jquery.easing.min-debug.js" ], function(require) {
    return function($) {
        require("./jquery.easing.min-debug")($);
        // (function($,window){
        $.fn.focusbanner = function(options) {
            return this.each(function() {
                var o = $.extend({}, $.fn.focusbanner.options, options || {}), loopBody = $(o.loopBody), loops = loopBody.children();
                if (loops.length <= 1) return;
                var dissolve = $(o.dissolve.selector), disChilds, disCurClass = o.dissolve.curClass, control = $(o.control.selector), conChilds, conCurClass = o.control.curClass, botton = $(o.botton.selector), btnChilds, btnCurClass = o.botton.curClass, contentDiv = o.contentDiv, isLoop = true, timer = null, cTimer = null, curClass = o.curClass, cell = 0, timeDo = new Date().getTime(), start = function() {
                    clearTimeout(timer);
                    timer = setTimeout(autoPlay, o.gap);
                    isLoop = true;
                }, stop = function() {
                    clearTimeout(timer);
                    isLoop = false;
                }, autoPlay = function() {
                    jump("+");
                }, jump = function(type, idx) {
                    var c = loops, cur, next;
                    if (idx === undefined) {
                        cur = c.filter("." + curClass);
                        if (type === "+") {
                            next = cur.next();
                            if (!next.length) next = c.eq(0);
                        } else {
                            next = cur.prev();
                            if (!next.length) next = c.eq(-1);
                        }
                        idx = next.index();
                    }
                    move(type, idx);
                }, move = function(type, idx) {
                    var i = 0, len = moves.length;
                    do {
                        moves[i++](type, idx);
                    } while (i < len);
                }, controlMove = function(type, idx) {
                    conChilds.eq(idx).addClass(conCurClass).siblings("." + conCurClass).removeClass(conCurClass);
                }, loopMove = function(type, idx) {
                    var currentLoop = loops.filter("." + curClass), nextLoop = loops.eq(idx), left;
                    if (type === "+") {
                        nextLoop.css("left", cell);
                        left = "-" + cell + "px";
                        $(contentDiv).stop().css({
                            left: 3600
                        });
                    } else {
                        loopBody.css("left", -cell);
                        currentLoop.css("left", cell);
                        nextLoop.css("left", 0);
                        left = 0;
                        $(contentDiv).stop().css({
                            left: -3600
                        });
                    }
                    nextLoop.addClass(curClass);
                    timeDo = new Date().getTime();
                    loopBody.animate({
                        left: left
                    }, o.speed, "easeOutCirc", function() {
                        $(this).css("left", 0);
                        currentLoop.removeClass(curClass);
                        nextLoop.css("left", 0);
                        if (isLoop) start();
                        clearTimeout(cTimer);
                        cTimer = setTimeout(function() {
                            $(contentDiv).animate({
                                left: 0
                            }, o.speed, "easeOutCirc");
                        }, o.speed);
                    });
                }, dissolveMove = function(type, idx) {
                    var currentDis = disChilds.filter("." + disCurClass), nextDis = disChilds.eq(idx);
                    currentDis.animate({
                        opacity: 0
                    }, 0, "linear", function() {
                        $(this).removeClass(disCurClass);
                    });
                    nextDis.animate({
                        opacity: 1
                    }, 0, "linear", function() {
                        $(this).addClass(disCurClass);
                    });
                }, bottonMove = function(type, idx) {
                    var currentDis = btnChilds.filter("." + btnCurClass), nextDis = btnChilds.eq(idx);
                    currentDis.animate({
                        opacity: 0
                    }, 0, "linear", function() {
                        $(this).removeClass(btnCurClass);
                    });
                    nextDis.animate({
                        opacity: 1
                    }, 0, "linear", function() {
                        $(this).addClass(btnCurClass);
                    });
                }, resize = function() {
                    var lb = loopBody;
                    cell = lb.parent().width();
                    loops.width(cell);
                    lb.width(cell * 2);
                }, canMove = function() {
                    var now = new Date().getTime();
                    if (now - timeDo < o.speed) return false;
                    timeDo = now;
                    return true;
                }, bindConEvent = function(e) {
                    clearTimeout(timer);
                    var t = $(e.target).closest(conChilds[0].tagName, this), nextIdx, curIdx, type;
                    if (t.length && !t.is("." + conCurClass) && canMove()) {
                        nextIdx = t.index();
                        curIdx = t.siblings("." + conCurClass).index();
                        type = nextIdx > curIdx ? "+" : "-";
                        isLoop = false;
                        jump(type, nextIdx);
                    }
                }, moves = [ loopMove ], setMoves = function() {
                    if (control.length) {
                        conChilds = control.children();
                        control.bind("click", bindConEvent);
                        moves.push(controlMove);
                    }
                    if (dissolve.length) {
                        disChilds = dissolve.children();
                        moves.push(dissolveMove);
                    }
                    if (botton.length) {
                        btnChilds = botton.children();
                        moves.push(bottonMove);
                    }
                }();
                resize();
                $(window).resize(resize);
                start();
                $(this).hover(stop, start);
                if (o.prev) {
                    $(o.prev).on("click", function() {
                        clearTimeout(timer);
                        if (canMove()) {
                            jump("-");
                        }
                        return false;
                    });
                }
                if (o.next) {
                    $(o.next).on("click", function() {
                        clearTimeout(timer);
                        if (canMove()) {
                            jump("+");
                        }
                        return false;
                    });
                }
            });
        };
        $.fn.focusbanner.options = {
            loopBody: "",
            // 焦点图的主体（selector）
            curClass: "current",
            // 焦点图当前选中的样式
            speed: 500,
            // 焦点图切换的速度（单位：ms）
            gap: 5e3,
            // 焦点图切换的间隔（单位：ms）
            next: "",
            // 下一张焦点图按钮，可选（selector）
            prev: "",
            // 上一张焦点图按钮，可选（selector）
            dissolve: {
                // 双焦点图切换，其中一张略小的图一般会带上溶解效果，可选。（注：为了兼容低配置机型，溶解效果目前取消了，只做了简单的切换。）
                curClass: "current",
                selector: ""
            },
            control: {
                // 焦点图带有下标的切换，可选
                curClass: "current",
                selector: ""
            },
            botton: {
                // 焦点图带有按钮切换
                curClass: "focus-btns",
                selector: ""
            },
            contentDiv: "content"
        };
    };
});

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - EASING EQUATIONS
 *
 * Open source under the BSD License.
 *
 * Copyright Â© 2001 Robert Penner
 * All rights reserved.
 *
 * TERMS OF USE - jQuery Easing
 *
 * Open source under the BSD License.
 *
 * Copyright Â© 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
*/
define("arale/base/1.0.0/module/focus/js/jquery.easing.min-debug", [], function() {
    return function($) {
        $.easing.jswing = $.easing.swing;
        $.extend($.easing, {
            def: "easeOutQuad",
            swing: function(e, f, a, h, g) {
                return $.easing[$.easing.def](e, f, a, h, g);
            },
            easeInQuad: function(e, f, a, h, g) {
                return h * (f /= g) * f + a;
            },
            easeOutQuad: function(e, f, a, h, g) {
                return -h * (f /= g) * (f - 2) + a;
            },
            easeInOutQuad: function(e, f, a, h, g) {
                if ((f /= g / 2) < 1) {
                    return h / 2 * f * f + a;
                }
                return -h / 2 * (--f * (f - 2) - 1) + a;
            },
            easeInCubic: function(e, f, a, h, g) {
                return h * (f /= g) * f * f + a;
            },
            easeOutCubic: function(e, f, a, h, g) {
                return h * ((f = f / g - 1) * f * f + 1) + a;
            },
            easeInOutCubic: function(e, f, a, h, g) {
                if ((f /= g / 2) < 1) {
                    return h / 2 * f * f * f + a;
                }
                return h / 2 * ((f -= 2) * f * f + 2) + a;
            },
            easeInQuart: function(e, f, a, h, g) {
                return h * (f /= g) * f * f * f + a;
            },
            easeOutQuart: function(e, f, a, h, g) {
                return -h * ((f = f / g - 1) * f * f * f - 1) + a;
            },
            easeInOutQuart: function(e, f, a, h, g) {
                if ((f /= g / 2) < 1) {
                    return h / 2 * f * f * f * f + a;
                }
                return -h / 2 * ((f -= 2) * f * f * f - 2) + a;
            },
            easeInQuint: function(e, f, a, h, g) {
                return h * (f /= g) * f * f * f * f + a;
            },
            easeOutQuint: function(e, f, a, h, g) {
                return h * ((f = f / g - 1) * f * f * f * f + 1) + a;
            },
            easeInOutQuint: function(e, f, a, h, g) {
                if ((f /= g / 2) < 1) {
                    return h / 2 * f * f * f * f * f + a;
                }
                return h / 2 * ((f -= 2) * f * f * f * f + 2) + a;
            },
            easeInSine: function(e, f, a, h, g) {
                return -h * Math.cos(f / g * (Math.PI / 2)) + h + a;
            },
            easeOutSine: function(e, f, a, h, g) {
                return h * Math.sin(f / g * (Math.PI / 2)) + a;
            },
            easeInOutSine: function(e, f, a, h, g) {
                return -h / 2 * (Math.cos(Math.PI * f / g) - 1) + a;
            },
            easeInExpo: function(e, f, a, h, g) {
                return f == 0 ? a : h * Math.pow(2, 10 * (f / g - 1)) + a;
            },
            easeOutExpo: function(e, f, a, h, g) {
                return f == g ? a + h : h * (-Math.pow(2, -10 * f / g) + 1) + a;
            },
            easeInOutExpo: function(e, f, a, h, g) {
                if (f == 0) {
                    return a;
                }
                if (f == g) {
                    return a + h;
                }
                if ((f /= g / 2) < 1) {
                    return h / 2 * Math.pow(2, 10 * (f - 1)) + a;
                }
                return h / 2 * (-Math.pow(2, -10 * --f) + 2) + a;
            },
            easeInCirc: function(e, f, a, h, g) {
                return -h * (Math.sqrt(1 - (f /= g) * f) - 1) + a;
            },
            easeOutCirc: function(e, f, a, h, g) {
                return h * Math.sqrt(1 - (f = f / g - 1) * f) + a;
            },
            easeInOutCirc: function(e, f, a, h, g) {
                if ((f /= g / 2) < 1) {
                    return -h / 2 * (Math.sqrt(1 - f * f) - 1) + a;
                }
                return h / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + a;
            },
            easeInElastic: function(f, h, e, l, k) {
                var i = 1.70158;
                var j = 0;
                var g = l;
                if (h == 0) {
                    return e;
                }
                if ((h /= k) == 1) {
                    return e + l;
                }
                if (!j) {
                    j = k * .3;
                }
                if (g < Math.abs(l)) {
                    g = l;
                    var i = j / 4;
                } else {
                    var i = j / (2 * Math.PI) * Math.asin(l / g);
                }
                return -(g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * 2 * Math.PI / j)) + e;
            },
            easeOutElastic: function(f, h, e, l, k) {
                var i = 1.70158;
                var j = 0;
                var g = l;
                if (h == 0) {
                    return e;
                }
                if ((h /= k) == 1) {
                    return e + l;
                }
                if (!j) {
                    j = k * .3;
                }
                if (g < Math.abs(l)) {
                    g = l;
                    var i = j / 4;
                } else {
                    var i = j / (2 * Math.PI) * Math.asin(l / g);
                }
                return g * Math.pow(2, -10 * h) * Math.sin((h * k - i) * 2 * Math.PI / j) + l + e;
            },
            easeInOutElastic: function(f, h, e, l, k) {
                var i = 1.70158;
                var j = 0;
                var g = l;
                if (h == 0) {
                    return e;
                }
                if ((h /= k / 2) == 2) {
                    return e + l;
                }
                if (!j) {
                    j = k * .3 * 1.5;
                }
                if (g < Math.abs(l)) {
                    g = l;
                    var i = j / 4;
                } else {
                    var i = j / (2 * Math.PI) * Math.asin(l / g);
                }
                if (h < 1) {
                    return -.5 * g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * 2 * Math.PI / j) + e;
                }
                return g * Math.pow(2, -10 * (h -= 1)) * Math.sin((h * k - i) * 2 * Math.PI / j) * .5 + l + e;
            },
            easeInBack: function(e, f, a, i, h, g) {
                if (g == undefined) {
                    g = 1.70158;
                }
                return i * (f /= h) * f * ((g + 1) * f - g) + a;
            },
            easeOutBack: function(e, f, a, i, h, g) {
                if (g == undefined) {
                    g = 1.70158;
                }
                return i * ((f = f / h - 1) * f * ((g + 1) * f + g) + 1) + a;
            },
            easeInOutBack: function(e, f, a, i, h, g) {
                if (g == undefined) {
                    g = 1.70158;
                }
                if ((f /= h / 2) < 1) {
                    return i / 2 * f * f * (((g *= 1.525) + 1) * f - g) + a;
                }
                return i / 2 * ((f -= 2) * f * (((g *= 1.525) + 1) * f + g) + 2) + a;
            },
            easeInBounce: function(e, f, a, h, g) {
                return h - $.easing.easeOutBounce(e, g - f, 0, h, g) + a;
            },
            easeOutBounce: function(e, f, a, h, g) {
                if ((f /= g) < 1 / 2.75) {
                    return h * 7.5625 * f * f + a;
                } else {
                    if (f < 2 / 2.75) {
                        return h * (7.5625 * (f -= 1.5 / 2.75) * f + .75) + a;
                    } else {
                        if (f < 2.5 / 2.75) {
                            return h * (7.5625 * (f -= 2.25 / 2.75) * f + .9375) + a;
                        } else {
                            return h * (7.5625 * (f -= 2.625 / 2.75) * f + .984375) + a;
                        }
                    }
                }
            },
            easeInOutBounce: function(e, f, a, h, g) {
                if (f < g / 2) {
                    return $.easing.easeInBounce(e, f * 2, 0, h, g) * .5 + a;
                }
                return $.easing.easeOutBounce(e, f * 2 - g, 0, h, g) * .5 + h * .5 + a;
            }
        });
    };
});
