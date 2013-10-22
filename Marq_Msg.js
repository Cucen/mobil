var mysql = require('mysql');
var http = require('http');

  function hello() {
    return 'hi';
  }

 
var connection = mysql.createConnection(
    {
      host     : 'localhost',
      user     : 'root',
      password : '333444',
      database : 'secim',
    }
)
 
connection.connect();
  
var data; // store query result
function scroll_messages()
{
var a,b,c;
a=5;
b=3;
c=a+b;
return c;
connection.connect();
console.log(c);
var queryString = 'SELECT * FROM iller where id=1';
	 connection.query(queryString, function(err, rows, fields) 
	{
         if (err) throw err;
         for (var i in rows) {
        console.log(rows[i]);
    }
         data = JSON.stringify(rows);
		 console.log(data);
	return data;
     }
	 );
 return data;	 
}
scroll_messages();

connection.end();
