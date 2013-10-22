var http = require("http");
var mysql = require('mysql'); // required modules

var connection = mysql.createConnection({ // connect to mysql database
  host     : 'localhost',
  port     : '3306',
  database : 'secim',
  user     : 'root',
  password : '333444',
});


var data; // store query result
connection.query('SELECT * FROM iller', function(err, rows, fields) { // query DB
 if (err) throw err;

 data = JSON.stringify(rows); // save query as JSON
});


http.createServer(function (request, response) { // create server
  var filePath = '.' + request.url;
  if (filePath == './')
  filePath = './MobileAnasayfa2.html';
  	
	var extname = path.extname(filePath);
	var contentType = 'text/html';
	switch (extname) {
		case '.js':
			contentType = 'text/javascript';
			break;
		case '.css':
			contentType = 'text/css';
			break;
	}
  response.writeHead(200, {"Content-Type": "text/html"}); 
  response.write("<h1>Hello Muzeyyen</h1>");
  response.write("<h2>Deneme</h2>");
  response.write('<pre>' + data + '</pre>');
  response.end();

}).listen(81);


console.log('Server running at http://127.0.0.1:81');