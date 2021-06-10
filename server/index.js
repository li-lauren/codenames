const express = require('express');
const http = require('http');
const { Server } = require("socket.io");
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true
  }
});

const router = require('./router');

// app.use(cors());
app.use(router);

io.on('connection', (socket) => {
  console.log('a user connected' + socket.id);
  
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('event://submitHint', data => {
    socket.broadcast.emit('event://getHint', data);
  });

  socket.on('event://selectHint', data => {
    socket.broadcast.emit('event://getSelectedHint', data);
  });

  socket.on('event://selectCard', data => {
    socket.broadcast.emit('event://getSelectedCard', data);
  });

  socket.on('event://saveHints', data => {
    socket.broadcast.emit('event://getSavedHints', data);
  });
});

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});