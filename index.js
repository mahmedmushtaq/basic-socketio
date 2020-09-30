const express = require('express');
const app = express();
const socketio = require('socket.io');

app.use(express.static(__dirname + '/public'));

const expressServer = app.listen(9000, () => {
  console.log('server is listening on the port 9000');
});

const io = socketio(expressServer);

// basic chat mechanism
 
io.on('connection', (socket) => {
  socket.emit('messageFromServer', { data: 'Welcome to the socket.io server' });
  socket.on('messageToServer', (dataFromClient) => {
    console.log(dataFromClient);
  });
});
