const express = require('express');
const cookieParser = require('cookie-parser');

let nextId = 1;

const suggestions = [{
  id: 1,
  title: 'Знакомство с Node.js',
  voters: new Set()
}];

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
  const title = req.body.title;

  suggestions.push({
    id: ++nextId,
    title
  });

  res.redirect('/suggestions');
});

server.get('/suggestions/:id', (req, res) => {
  const suggestion = suggestions.find(suggestion => suggestion.id == req.params.id);

  res.render('suggestion', {
    suggestion
  });
});

server.post('/suggestions/1', (req, res) => {
  
});

server.listen(3000, 'localhost', () => console.log('Сервер запущен!'));