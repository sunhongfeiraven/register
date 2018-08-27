'use strict';

module.exports = appInfo => {
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1535210224589_7534';

  // add your config here
  config.middleware = [];

  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  };

  config.security = {
    csrf: false,
  };

  config.mongoose = {
    url: 'mongodb://127.0.0.1/register',
    options: {},
  };

  return config;
};
