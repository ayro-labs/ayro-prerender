'use strict';

const {configs} = require('@ayro/commons');
const path = require('path');

const config = configs.load(path.resolve('config.yml'));

exports.port = config.get('app.port', 4100);
exports.chromeLocation = config.get('app.chromeLocation', '/usr/bin/chromium-browser');
exports.chromeFlags = config.get('app.chromeFlags', [
  '--headless',
  '--disable-gpu',
  '--disable-extensions',
  '--hide-scrollbars',
  '--no-sandbox',
  '--remote-debugging-port=9222',
]);
