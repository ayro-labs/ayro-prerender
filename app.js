'use strict';

require('newrelic');

const settings = require('./configs/settings');
const prerender = require('prerender');

const prerenderServer = prerender({
  port: settings.port,
  chromeLocation: settings.chromeLocation,
  chromeFlags: settings.chromeFlags,
});
prerenderServer.use(prerender.sendPrerenderHeader());
prerenderServer.use(prerender.httpHeaders());
prerenderServer.use(prerender.removeScriptTags());
prerenderServer.use(prerender.blockResources());
prerenderServer.use(prerender.whitelist());
prerenderServer.start();
