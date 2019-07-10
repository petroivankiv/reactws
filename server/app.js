const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const cors = require('cors');

// cors headers
app.use(cors());

app.get('/', function(req, res){
  res.sendFile(__dirname + '../public/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
    socket.emit('chat message', 'You said: ' + msg);
    socket.broadcast.emit('chat message', socket.id + ' said: ' + msg);
  });
});

http.listen(4000, function(){
  console.log('listening on *:4000');
});