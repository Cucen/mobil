var http = require("http");
var server = http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("<html>");
  response.write("<head>");
  response.write("<title>Hello World Page</title>");
  response.write("</head>");
  response.write("<body>");
  response.write("Hello World!");

  var mysql = require('mysql');
 
var connection = mysql.createConnection(
    {
      host     : 'localhost',
      user     : 'root',
      password : '333444',
      database : 'secim',
    }
);
 
connection.connect();
 
var queryString = 'SELECT * FROM iller where id <5';

connection.query(queryString, function(err, rows, fields) {
    if (err) throw err;
 
    for (var i in rows) {
	    data = JSON.stringify(rows[i]); // save query as JSON
        console.log(rows[i]);
		response.write(data);
    }
});
  response.write("</body>");
  response.write("</html>");
  response.end();
});
 
server.listen(8080);
console.log("Server is listening");