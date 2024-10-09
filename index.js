const express = require('express');
const app = express();
const http = require('http');
const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');
const socketIo = require('socket.io');


const port = 8080;
const server = http.createServer(app);
const io = socketIo(server);


const portName = 'COM3';
const arduinoPort = new SerialPort({
    path: portName,
    baudRate: 9600,
});


const parser = arduinoPort.pipe(new ReadlineParser({ delimiter: '\n' }));


app.use(express.static('static'));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/static/index.html'); 
});

// Listen for data from the Arduino
parser.on('data', (data) => {
    console.log('Water Level:', data.trim());
    io.emit('waterLevel', data.trim());
});


server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
