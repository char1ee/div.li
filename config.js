var config = {
  // site settings
  VERSION: '0.0.1',
  CHARSET:'utf-8',
  NAME: '20中',
  DESCRIPTION : '20中',
  KEYWORDS    : '20中',

  SESSION_SECRET   : process.env.SESSION_SECRET   || 'a743894a0e',  // session加密串
  COOKIE_SECRET    : process.env.COOKIE_SECRET    || 'a743894a0e',  // cookie加密串
  AUTH_COOKIE_NAME : process.env.AUTH_COOKIE_NAME || 'iefree_secret',   // cookie 名字
  SPAM_COOKIE_NAME : process.env.SPAM_COOKIE_NAME || 'iefree_spam',     // 防spam cookie的名字
  PORT             : process.env.PORT             || 1988,          // 端口号

  THEME : process.env.THEME || 'default'    // 主题名称
};

config.STATIC_DIR      = __dirname + '/public';                         // 默认静态服务器路径
config.THEME_DIR       = __dirname + '/views/theme/' + config.THEME;    // 模板路径
config.THEME_ASSET_DIR =  '/asset/theme/' + config.THEME;           // 模板静态文件路径

exports.config = config;