seajs.config({
	paths: {
		'_path': '/asset/theme/default'
	},
	alias: {
		'config':'_path/config',
		'$': '_path/lib/jquery/jquery-1.9.1'
	}
});


define(function (require) {
  var
    router =  require('./router').router,
    www = require('./routes/www');
  router
    .get('*', www.all)
    .get('/', www.home)
});