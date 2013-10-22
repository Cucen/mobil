var http = require("http");
var mysql = require('mysql'); // required modules
var fs = require('fs');
var index = fs.readFileSync('index.html');

var connection = mysql.createConnection({ // connect to mysql database
  host     : 'localhost',
  port     : '3306',
  database : 'secim',
  user     : 'root',
  password : '333444',
});


var data; // store query result
connection.query('SELECT * FROM iller where id <2', function(err, rows, fields) { // query DB
 if (err) throw err;

 data = JSON.stringify(rows); // save query as JSON
});



http.createServer(function (request, response) { // create server

  response.writeHead(200, {"Content-Type": "text/html"}); 
  response.write("<h1>Hello Muzeyyen</h1>");
  response.write("<h2>Deneme</h2>");
  response.write('<pre>' + data + '</pre>');
  response.write("<input id='user-name' type='text' value="+data+"/>");
  response.write("<input id='muzeyyen' type='button' value="+data+"/>");
  response.end(index);

  

}).listen(81);

console.log('Server running at http://127.0.0.1:81');
connection.end();