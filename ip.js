var http = require('http');

var url = 'http://ip-api.com/json';

function makeCall (url, callback) {
    http.get(url,function (res) {
        res.on('data', function (d) {
            callback(JSON.parse(d));
        });
        res.on('error', function (e) {
            console.error(e);
        });
    });
}

function handleResults(results){
    //do something with the results
}

makeCall(url, function(results){
    console.log('results:',results);
    handleResults(results);        
});