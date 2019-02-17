const express = require('express');

const server = express();

server.get('/', (req, res) => {
  console.log(req.hostname);
  console.log(req.url);

  res.sendFile('./index.html', { root: __dirname });
});

server.listen(3000, 'localhost', () => console.log('Сервер запущен!'));