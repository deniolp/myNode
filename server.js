const http = require('http');

const server = http.createServer();

server.on('request', () => {
  console.log('Request');
});

server.listen(3000, '127.0.0.1', () => console.log('Сервер запущен!'));