'use strict';
var config = require('../config').config;
// URL / || home.html
exports.home = function (req, res) {
    res.render(config.THEME_DIR + '/home', {
        config : config,
        title  : config.NAME,
    });
};

// URL 404
exports.pageNotFound = function (req, res) {
    res.statusCode = 404;
    res.render(config.THEME_DIR + '/404', {
        config: config,
        layout: false
    });
};