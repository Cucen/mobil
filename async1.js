var mysql       = require('mysql');
var db  = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '333444',
  database : 'secim'
});

var _ = require('underscore');

db.connect(function() {
  db.query('SELECT il_Adi FROM iller', function (err, rows) {
    if (err) { console.log(err); return; }
    _.each(rows, function(one) {
      console.log(one);
      var label = "Label_"+one.id;
      var sql = 'UPDATE iller SET il_Adi = ? WHERE id = ?';
      db.query(sql, [label, one.id], function(err, result) {
        if(err) { console.log(err); return; }
        console.log("Set label on row %s", one.id);
      });
    });
  });
});