var globals   = require("./globals");
var reachFeed = require("./reachFeed");
var request   = require("request");

request(globals.nerdcastFeed.url, reachFeed.callback);
setTimeout(reachFeed.response, globals.nerdcastFeed.timeout);
