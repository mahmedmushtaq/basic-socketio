const express = require('express');
const app = express();
const socketio = require('socket.io');

app.use(express.static(__dirname + '/public'));

const expressServer = app.listen(9000, () => {
  console.log('server is listening on the port 9000');
});

const io = socketio(expressServer);

// how I can implement this
// basic chat mechanism
// first client connect to server
// send message on specific topic with data like { messageData: 'text' , otherclientListeningTopic: 'topic-name'}
// server emit message to specific client topic and those specific client listen this

io.on('connection', (socket) => {
  socket.emit('messageFromServer', { data: 'Welcome to the socket.io server' });
  socket.on('messageToServer', (dataFromClient) => {
    console.log(dataFromClient);
  });
});
