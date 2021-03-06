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

function getIller2()
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

var getIller = function()
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
getIller();

var getIlceler = function ()
{
     var queryString = 'SELECT * FROM ilceler ';
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
getIlceler();

var getBeldeler = function ()
{
     var queryString = 'SELECT * FROM beldeler ';
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
getBeldeler();

var getAdaylar = function ()
{
     var queryString = 'SELECT * FROM adaylar';
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
getAdaylar();

var getPartiler = function ()
{
     var queryString = 'SELECT * FROM partiler';
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
getPartiler();

var getIleBagliIlce = function (il_Id)
{
     var queryString = 'SELECT Ilce_Adi FROM ilceler WHERE il_Id=?';
	 connection.query(queryString,[il_Id], function(err, rows, fields) 
	 {
         if (err) throw err;
         for (var i in rows) 
		 {
            console.log(rows[i]);
         } 
     }
	 );	 
};
getIleBagliIlce(2);

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

var getBeldeyeBagliAdaylar = function (Belde_Id)
{
     var queryString = 'SELECT * FROM adaylar WHERE Belde_Id=?';
	 connection.query(queryString,[Belde_Id], function(err, rows, fields) 
	 {
         if (err) throw err;
         for (var i in rows) 
		 {
            console.log(rows[i]);
         } 
     }
	 );	 
};
getBeldeyeBagliAdaylar(1);

var getAdayBilgileri = function (id)
{
     var queryString = 'SELECT * FROM adaylar WHERE Id=?';
	 connection.query(queryString,[id], function(err, rows, fields) 
	 {
         if (err) throw err;
         for (var i in rows) 
		 {
            console.log(rows[i]);
         } 
     }
	 );	 
};
getAdayBilgileri(1);

var getAdayOzgecmis = function (Aday_Id)
{
     var queryString = 'SELECT * FROM ozgecmis WHERE Aday_Id=?';
	 connection.query(queryString,[Aday_Id], function(err, rows, fields) 
	 {
         if (err) throw err;
         for (var i in rows) 
		 {
            console.log(rows[i]);
         } 
     }
	 );	 
};
getAdayOzgecmis(1);

connection.end();
