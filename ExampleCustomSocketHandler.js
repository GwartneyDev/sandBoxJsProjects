///Example of both client  and server 

//testing commit changes

const net = require('net');

const server = net.createServer((socket) => {
  console.log('Client connected');

  socket.on('data', (data) => {
    console.log('Received:', data.toString());
    // Send a response back to the client
    socket.write('Hello, client! This is the server.');
  });

  socket.on('end', () => {
    console.log('Client disconnected');
    socket.close();
  });
});

server.listen(3000, () => {
  console.log('TCP server listening on port 3000');
});


const net = require('node:net');

const client = net.createConnection({ port: 3000, host: 'localhost' }, () => {
  // 'connect' listener.
  console.log('connected to server!');

  // Send data to the server
  client.write('hello again');
  client.write('this is awsome');
});

client.on('data', (data) => {
  console.log(data.toString());
});

client.on('end', () => {
  console.log('disconnected from server');
});
