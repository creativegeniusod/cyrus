const express =  require('./express');
const socketServer = require('http').createServer(express);
var io = require('socket.io')(socketServer);

/* Listen for socket connection on port 3002 */
socketServer.listen(3002, function(){
console.log('Socket server listening on : 3002');
});

/* This event will emit when client connects to the socket server */
io.on('connection', function(socket){
	console.log('Socket connection established');
	socket.on('message', function(msg){
		console.log('Message from extension is : '+ msg);
		socket.emit('return_message','message from server');
	})
});


