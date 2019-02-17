const express = require('express');
const cookieParser = require('cookie-parser');

const suggestions = ['Знакомство с Node.js'];

const server = express();

server.set('view engine', 'pug');

server.use(express.static('public'));
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

server.get('/suggestions', (req, res) => {
  res.render('suggestions', {
    suggestions
  })
});

server.post('/suggestions', (req, res) => {
  //Создать предложение
  //Перенаправить на список
  throw new Error('Not implemented yet');
});

server.get('/suggestions/1', (req, res) => {
  //Показать предложение
  throw new Error('Not implemented yet');
});

server.post('/suggestions/1', (req, res) => {
  //Добавить голос и перенаправить на предложение
  throw new Error('Not implemented yet');
});

server.listen(3000, 'localhost', () => console.log('Сервер запущен!'));