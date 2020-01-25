var nerdcastFeed = {
    "url"      : "https://jovemnerd.com.br/feed-nerdcast/",
    "error"    : null,
    "response" : null,
    "feed"     : null,
    "timeout"  : 5000
}

var messages = {
    "statusOk"        : 200,
    "responseSuccess" : "It worked. Nerdcast feed status code was %d",
    "responseFailure" : "Oh no. Nerdcast feed response wasn't ok or your internet connection is too slow.\nResponse status code was %s"
}

module.exports = {
    "nerdcastFeed" : nerdcastFeed,
    "messages"     : messages
}
