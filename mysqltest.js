// Include http module, 
var http = require('http'), 
// And mysql module you've just installed. 
   mysql = require("mysql"); 
     
// Create the connection. 
// Data is default to new mysql installation and should be changed according to your configuration. 
var connection = mysql.createConnection({ // connect to mysql database
  host     : 'localhost',
  port     : '3306',
  database : 'secim',
  user     : 'root',
  password : '333444',
});
 
// Create the http server. 
http.createServer(function (request, response) { 
   // Attach listener on end event. 
   request.on('end', function () { 
      // Query the database. 
      connection.query('SELECT * FROM iller', function (error, rows, fields) { 
         response.writeHead(200, { 
            'Content-Type': 'x-application/json' 
         }); 
         // Send data as JSON string. 
         // Rows variable holds the result of the query. 
		 
		  response.writeHead(200, {}); 
  response.write("<h1>Hello Muzeyyen</h1>");
  response.write("<h2>Deneme</h2>");
  response.write('<pre>' + JSON.stringify(rows) + '</pre>')

  response.end(JSON.stringify(rows));
		 
		 
      }); 
   }); 
// Listen on the 8080 port. 
}).listen(81);
console.log('Listening 81');
