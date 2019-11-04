const { config } = require('./wdio.conf.js');

config.services = ['chromedriver'];
config.dockerOptions = null;

exports.config = config;
