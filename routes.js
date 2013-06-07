var www = require('./routes/www');

module.exports = function (app) {
  app
  .get(/^\/$|^\/home$/, www.home)    // 首页
  .get('/news',         www.list)    // 新闻中心
  .get('/article',      www.article) // 关于我们
  .get('/list',         www.list)    // 关于我们
  .get('/product',      www.article) // 产品展示
  .get('/success',      www.article) // 成功案例
  .get('/support',      www.article) // 服务支持
  .get('/solution',     www.article) // 解决方案
  .get('/partnership',  www.article) // 战略合作

  .get('*', www.pageNotFound);
};