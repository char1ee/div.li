
/**
 * Module dependencies.
 */
'use strict';
var express  = require('express'),
    http     = require('http'),
    routes   = require('./routes'),
    config   = require('./config').config,
    // path     = require('path'),
    puer     = require('puer'); //  f5

//  开启模板 partial
var hbs = require('hbs'),
    fs  = require('fs'),
    partialsDir = config.THEME_DIR + '/partials';
var filenames = fs.readdirSync(partialsDir);
filenames.forEach(function (filename) {
    var matches = /^([^.]+).hbs$/.exec(filename);
    if (!matches) {
        return;
    }
    var name = matches[1];
    var template = fs.readFileSync(partialsDir + '/' + filename, config.CHARSET);
    // console.log(filename)
    hbs.registerPartial(name, template);
});

var app = express();

app
    .set('port', config.PORT)

    // template
    .set('views', __dirname + '/views/theme/' + config.THEME)
    .set('view engine', 'hbs')
    .engine('hbs', require('hbs').__express)
    .use(express.compress())
    .use(express.favicon(config.STATIC_DIR + '/favicon.ico'))
    .use(express.bodyParser())
    .use(express.cookieParser())
    .use(express.session({ secret: config.SESSION_SECRET }))
    .use(express.methodOverride())

    // f5
    .use(puer.connect(app, {
        dir: __dirname,
        interval: 500, // 监听文件的间隔,同上面的 -t --time参数
        ignored: /(\/|^)\..*|node_modules/  //忽略的监听文件，默认忽略dotfile 和 node_modules
    }))

    // 静态目录
    .use('/', express.static(config.STATIC_DIR, {
        maxAge : 31557600000 //一年
    }))
    .use(config.THEME_ASSET_DIR, express.static(config.THEME_DIR + '/asset/src'), {
        maxAge : 31557600000
    });

// development only
if ('development' === app.get('env')) {
    app.use(express.logger('dev'));
    app.use(express.errorHandler());
}


routes(app);
http.createServer(app).listen(app.get('port'), function () {
    // console.log('Express server listening on port ' + app.get('port'));
});
