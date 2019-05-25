const express = require('express');
const mongoose = require('mongoose');
const register = require('./routes/register');
const login = require('./routes/login');
const addKeyword = require('./routes/addKeyword');
const addGold = require('./routes/addGold');

const app = express();
const server = app.listen(3001, () => console.log("Lisening on port 3001."));

const socket = require("socket.io");

const io = socket(server);
io.on("connection", socket => {
  console.log("Made socket connection", socket.id);

  socket.on("chat", data => {
    io.sockets.emit("chat", data);
  });

  socket.on("typing", data => {
    socket.broadcast.emit("typing", data);
  });
});

mongoose
  .connect(
    "mongodb+srv://admin:admin@hackathon0-h81u7.azure.mongodb.net/test?retryWrites=true",
    { useNewUrlParser: true }
  )
  .then(() => console.log("Connected to MongoDB."))
  .catch(err => console.log("Error", err));

app.use(express.json());
app.use('/register', register);
app.use('/login', login);
app.use('/addKeyword', addKeyword);
app.use('/addGold', addGold);