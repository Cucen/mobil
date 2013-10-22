function nehaberkoc(){
document.getElementById("clickMe").onclick = naberkoc();
	 document.getElementById("clickMe").onclick = function () { alert('hello!'); };
	 var el = document.getElementById("clickMe");
     if (el.addEventListener)
     el.addEventListener("click", doFunction, false);
     else if (el.attachEvent)
    el.attachEvent('onclick', doFunction);
     document.write("Ne haber muzos");
}

var http = require('http'),
fs = require('fs');
fs.readFile('C:/inetpub/wwwroot/xampp/Secim/MobileAnasayfa2.html', function (err, html) 
{
    if (err) 
	{
        throw err; 
    }       
    http.createServer(function(request, response) 
	{  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }
    ).listen(8080);
});
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
        console.log(rows[i]);

    }
});



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
	 
  return 'Muzeyyen';
};
getIller2();

connection.end();