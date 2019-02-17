const express = require('express');

const server = express();

server.listen(3000, 'localhost', () => console.log('Сервер запущен!'));