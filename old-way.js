const socketio = require('socket.io');
const http = require('http');

const server = http.createServer((req, res) => {
  res.end('I am connected');
});

const io = socketio(server);

io.on('connection', (socket, req) => {
  // emit send a message
  socket.emit('welcome', 'Welcome to the websocket server');

  // socket.on mean listening on the specific topic
  socket.on('message', (msg) => {
    console.log(msg);
  });
});

server.listen(8000, () => {
  console.log('server is listening on the port 8000');
});
