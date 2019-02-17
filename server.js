const express = require('express');
const querystring = require('querystring');

const server = express();

server.use(express.urlencoded({ extended:true }));

server.get('/', (req, res) => {
  const cookies = querystring.parse(req.headers.cookie);

  console.log(cookies);

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
    <h1>Вход</h1>

    <form method="POST">
      <input type="text" name="username">
      <button type="submit">Войти</button>
    </form>
  </body>
  </html>
  `);
});

server.post('/', (req, res) => {
  res.cookie('username', req.body.username);

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
      <p>Привет, ${req.body.username}</p>
      </form>
    </body>
  </html>
  `);
});

server.listen(3000, 'localhost', () => console.log('Сервер запущен!'));