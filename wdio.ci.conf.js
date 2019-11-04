const { config } = require('./wdio.BASE.conf.js');

config.capabilities[0]['goog:chromeOptions'].args = [
    '--disable-infobars',
    '--window-size=1280,800',
    '--headless',
    '--no-sandbox',
    '--disable-gpu',
    '--disable-setuid-sandbox',
    '--disable-dev-shm-usage',
];

exports.config = config;
