const express = require('express');
const cookieParser = require('cookie-parser');

const server = express();

server.use(express.urlencoded({ extended:true }));
server.use(cookieParser());

server.get('/', (req, res) => {
  const username = req.cookies.username;

  res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Предложения</title>
  </head>
  <body>
    ${username ?
      `
      <p>Привет, ${username}</p>
      `
      :
      `
      <h1>Вход</h1>

      <form method="POST">
        <input type="text" name="username">
        <button type="submit">Войти</button>
      </form>
      `
    }
  </body>
  </html>
  `);
});

server.post('/', (req, res) => {
  res.cookie('username', req.body.username);

  res.redirect('/');
});

server.listen(3000, 'localhost', () => console.log('Сервер запущен!'));