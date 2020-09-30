const express = require('express');
const app = express();
const socketio = require('socket.io');

app.use(express.static(__dirname + '/public'));

const expressServer = app.listen(9000, () => {
  console.log('server is listening on the port 9000');
});

const io = socketio(expressServer);

 
io.on('connection', (socket) => {
  console.log('user is connected ', socket.id);
  socket.on('userConnected', (roomName) => {
    console.log('connected User unique roomName', roomName);
    socket.join(roomName);
  });
  socket.on('userDisconnected', (roomName) => {
    console.log('leave this room name', roomName);
    socket.leave(roomName);
  });

  socket.on('message', (data) => {
    console.log('message data = ', data);
    socket.broadcast
      .to(data.otherUserRoomName)
      .emit('chat message', data.message);
  });
 
});
