var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use('/static', express.static(__dirname + '/static'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});



io.sockets.on('connection', function (socket) {

  socket.on('chat message', function (msg) {
    io.emit('chat message', msg);
  });

});

http.listen(3000, function () {
  console.log('listening on *:3000');
});