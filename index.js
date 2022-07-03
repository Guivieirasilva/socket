const express = require('express');
const path = require('path');
const { emit } = require('process');
const socketIO = require('socket.io');

const app = express();

app.use("/", express.static(path.join(__dirname, "public")));

const server = app.listen(3000, () => {
    console.log("Rodando")
})


const io = socketIO(server);

io.on('connection', (socket) => {
    console.log('Nova Conexão')

    socket.broadcast.emit('hello', {msg: `Hello World`})

})