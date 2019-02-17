const express = require('express');
const cookieParser = require('cookie-parser');

const server = express();

server.set('view engine', 'pug');

server.use(express.urlencoded({ extended:true }));
server.use(cookieParser());

server.get('/', (req, res) => {
  const username = req.cookies.username;

  res.render('index', {
    username
  });
});

server.post('/', (req, res) => {
  res.cookie('username', req.body.username);

  res.redirect('/');
});

server.listen(3000, 'localhost', () => console.log('Сервер запущен!'));