const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const cors = require('cors');

// cors headers
app.use(cors());

app.get('/', function (req, res) {
  res.sendFile(__dirname + '../public/index.html');
});

const chat = io
  .of('/chat')
  .on('connection', function (socket) {
    console.log('a user connected');

    socket.on('disconnect', function () {
      console.log('user disconnected');
    });

    socket.on('chat message', function (msg) {
      console.log('message: ' + msg);
      socket.emit('chat message', 'You said: ' + msg, {
        that: 'only'
        , '/chat': 'will get'
      });
      chat.emit('chat message', socket.id + ' said: ' + msg, {
        everyone: 'in'
        , '/chat': 'will get'
      });
    });
  });

http.listen(4000, function () {
  console.log('listening on *:4000');
});