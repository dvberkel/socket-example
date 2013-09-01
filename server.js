var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

server.listen(8080);

app.use('/static', express.static(__dirname + '/public'));

var viewers = {};

io.sockets.on('connection', function(socket){
    socket.on('viewer', function(data){
	console.log('Socket ' + socket.id + ' has been connected');
	viewers[socket.id] = socket;
    });
    socket.on('input-event', function(input){
	for (id in viewers) {
	    viewers[id].emit('game-event', input);
	}
    });
    socket.on('disconnect', function(input){
	console.log('Socket ' + socket.id + ' has been disconnected');
	delete viewers[socket.id];
    })
});
