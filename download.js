var http = require("http");

var req = http.request(Options, function(res) {
    res.setEncoding('utf8');
});

req.on('response', function (response) {
    response.on('data', function (chunk) {
        console.log(chunk);
        callback(null, JSON.parse(chunk));
    });
});

req.on('error', function(e) {
    callback(e);
    //callback(e.message);
});

req.end();;