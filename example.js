var express = require('express');
var app     = express();

app.use(express.bodyParser());

app.post('/myaction', function(req, res) {
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
var queryString = 'SELECT * FROM iller where id <2';
connection.query(queryString, function(err, rows, fields) {
    if (err) throw err;
 
    for (var i in rows) {
        console.log(rows[i]);
		 res.send('You sent the name "' + rows[i] + '".');
		 res.write(rows[i]);
    }
});
  res.send('You sent the name "' + req.body.name + '".');
		
  
});

app.listen(8080, function() {
  console.log('Server running at http://127.0.0.1:8080/');
});

