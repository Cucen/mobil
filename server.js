var app = require('express').createServer();
var io = require('socket.io').listen(app);
app.configure(function(){
  app.set('port', process.env.PORT || 3000);  
  app.set("view options", {layout: false});  //This one does the trick for rendering static html
  app.engine('html', require('ejs').renderFile); 
  app.use(app.router);

});
app.get('/', function(req, res) {
   res.render('client1.html');
});

io.sockets.on('connection', function (socket) {
console.log('Someone connected!');
socket.on('set nickname' , function (nickname) {
socket.nickname = nickname;
console.log(nickname + ' just connected!');
});

});

app.listen(8080);