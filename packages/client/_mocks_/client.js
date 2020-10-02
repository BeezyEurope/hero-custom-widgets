const jsdom = require("jsdom");
const fetch = require('node-fetch');

const dom = new jsdom.JSDOM("<!doctype html><html><body></body></html>");

global.window = dom.window;
global.document = dom.window.document;
global.navigator = dom.window.navigator;
// new lines
global.Node = dom.window.Node;

global.fetch = fetch;
