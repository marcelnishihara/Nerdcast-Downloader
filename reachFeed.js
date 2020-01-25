var globals = require("./globals");

function nerdcastResponse() {
    var responseTrue = globals.nerdcastFeed.response == globals.messages.statusOk;

    if (responseTrue) {
        console.log(globals.messages.responseSuccess, globals.nerdcastFeed.response);
    } else {
        console.log(globals.messages.responseFailure, globals.nerdcastFeed.response);
    }
}

function requestCallback(error, response, body) {
    var feedStatus = response && response.statusCode;
    globals.nerdcastFeed.error    = error;
    globals.nerdcastFeed.response = feedStatus;
    globals.nerdcastFeed.feed     = body;
}

module.exports = {
    "response" : nerdcastResponse,
    "callback" : requestCallback
}
