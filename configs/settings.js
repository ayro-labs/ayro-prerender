'use strict';

const {properties} = require('@ayro/commons');

exports.port = properties.get('app.port', 4100);
exports.chromeLocation = properties.get('app.chromeLocation', '/usr/bin/chromium-browser');
exports.chromeFlags = properties.get('app.chromeFlags', [
  '--headless',
  '--disable-gpu',
  '--disable-extensions',
  '--hide-scrollbars',
  '--no-sandbox',
  '--remote-debugging-port=9222',
]);
