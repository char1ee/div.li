define(function(require, exports){
  var
    config = require('config').config,
    DIR    = config.THEME_ASSET_DIR;

  var $ = require('$');
  require('./js/jquery.focusbanner.js')($);
  $('.i-focus').html(
     '<ul id="banner_img" class="f-img-list">'+
        '<li style="background:#fff">'+
          '<div class="-box-fluid">'+
            '<img src="' +DIR+ '/module/focus/img/1-1.png" />'+
          '</div>'+
        '</li>'+
        '<li style="background:#fff">'+
          '<div class="-box-fluid">'+
            '<img src="' +DIR+ '/module/focus/img/2-1.png" />'+
          '</div>'+
        '</li>'+
        '<li style="background:#fff">'+
          '<div class="-box-fluid">'+
            '<img src="' +DIR+ '/module/focus/img/3-1.png" />'+
          '</div>'+
        '</li>'+
        '<li style="background:#fff">'+
          '<div class="-box-fluid">'+
            '<img src="' +DIR+ '/module/focus/img/4-1.png" />'+
          '</div>'+
        '</li>'+
        '<li style="background:#fff">'+
          '<div class="-box-fluid">'+
            '<img src="' +DIR+ '/module/focus/img/5-1.png" />'+
          '</div>'+
        '</li>'+
      '</ul>'+
      '<div class="f-b">'+
        '<div class="f-content" style="display: none;">'+
          '<div class="d-img-list-bg"></div>'+
          '<ul id="banner_content" class="d-img-list" >'+
            '<li>'+
              '<div class="-box-fluid">'+
                '<img src="' +DIR+ '/module/focus/img/1-2.png" />'+
              '</div>'+
            '</li>'+
            '<li>'+
              '<div class="-box-fluid">'+
                '<img src="' +DIR+ '/module/focus/img/2-2.png" />'+
              '</div>'+
            '</li>'+
            '<li>'+
              '<div class="-box-fluid">'+
                '<img src="' +DIR+ '/module/focus/img/3-2.png" />'+
              '</div>'+
            '</li>'+
            '<li>'+
              '<div class="-box-fluid">'+
                '<img src="' +DIR+ '/module/focus/img/4-2.png" />'+
              '</div>'+
            '</li>'+
            '<li>'+
              '<div class="-box-fluid">'+
                '<img src="' +DIR+ '/module/focus/img/5-2.png" />'+
              '</div>'+
            '</li>'+
          '</ul>'+
          '<div id="banner_btn" class="focus-btns">'+
            '<a href="javascript:;"></a>'+
            '<a href="javascript:;"></a>'+
            '<a href="javascript:;"></a>'+
          '</div>'+
        '</div>'+
      '</div>'+
      '<div class="-box-fluid">'+
        '<div class="focus-control">'+
          '<span class="current"></span>'+
          '<span></span>'+
          '<span></span>'+
          '<span></span>'+
          '<span></span>'+
        '</div>'+
      '</div>'+

      '<a href="javascript:;" class="focus-page-btn focus-btn-prev" hidefocus="true" style="display: none;"></a>'+
      '<a href="javascript:;" class="focus-page-btn focus-btn-next" hidefocus="true" style="display: none;"></a>'+

      '<div class="m-banner i-banner-index"></div>'+
    '</div>'
  );
  $('.focus-page-btn').show();
  $('.f-content').show();

  $('#banner_img').find('li').eq(0).addClass('on');
  $('#banner_content').find('li').eq(0).addClass('on');
  $('#banner_btn').find('a').eq(0).addClass('on');
  function autoHeight(){
    var ratio = 1440 / 410,
      _h = $(window).width() / ratio;
    $('.i-focus').height(_h);
    $('.f-img-list').height(_h);
  }
  autoHeight();
  $(window).on('resize', function(){
    autoHeight();
  })
  var oFocus = $('.i-focus').focusbanner({
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
    speed: 500,
    gap: 5000,
    next: '.focus-btn-next',
    prev: '.focus-btn-prev',
    contentDiv: '.f-content',
    botton: {
      selector: '.focus-btns',
      curClass: 'on'
    }
  });

  $('.i-main-nav').on({
    mouseenter:function(){
      oFocus.stop();
    }
  })
})