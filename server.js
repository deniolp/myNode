const express = require('express');

const server = express();

server.get('/', (req, res) => {
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

    <form>
      <input type="text" name="username">
      <button type="submit">Войти</button>
    </form>
  </body>
  </html>
  `);
});

server.listen(3000, 'localhost', () => console.log('Сервер запущен!'));