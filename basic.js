var http = require('http');
var fs = require('fs');
var path = require('path');
http.createServer(function (request, response) {
    console.log('request starting...');
	
	var filePath = '.' + request.url;
	if (filePath == './')
		filePath = './MobileAnasayfa.html';
		
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
	
	path.exists(filePath, function(exists) {
	
		if (exists) {
			fs.readFile(filePath, function(error, content) {
				if (error) {
					response.writeHead(500);
					response.end();
				}
				else {
					response.writeHead(200, { 'Content-Type': contentType });
					response.end(content, 'utf-8');
				}
			});
		}
		else {
			response.writeHead(404);
			response.end();
		}
	});
	
}).listen(8125);
console.log('Server running at http://127.0.0.1:8125/');


function nehaberkoc(){
     document.write("Ne haber muzos");
}

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
	data = JSON.stringify(rows);
 
    for (var i in rows) {
        console.log(rows[i]);
    }
});

var queryString = 'SELECT Belde_Adi FROM beldeler WHERE Ilce_Id=1';
	 connection.query(queryString,function(err, rows, fields) 
	 {

         if (err) throw err;
         for (var i in rows) 
		 {
            console.log(rows[i]);
		
         } 
     }
);	 

var getIlceyeBagliBelde = function (Ilce_Id)
{
     var queryString = 'SELECT Belde_Adi FROM beldeler WHERE Ilce_Id=?';
	 connection.query(queryString,[Ilce_Id], function(err, rows, fields) 
	 {
         if (err) throw err;
         for (var i in rows) 
		 {
            console.log(rows[i]);
         } 
     }
	 );	 
};
getIlceyeBagliBelde(1);

var getIller2 = function()
{
     var queryString = 'SELECT * FROM iller';
	 connection.query(queryString, function(err, rows, fields) 
	 {
         if (err) throw err;
         for (var i in rows) 
		 {
            console.log(rows[i]);
         } 
     }
	 );	 	  
};
connection.end();