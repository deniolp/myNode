const http = require('http');

http.createServer((req, res) => {
  console.log(req.method);
  console.log(req.url);
  console.log(req.headers);

  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8'
  });

  res.end(`
    <h1>Приветикус!</h1>
  `);
}).listen(3000, '127.0.0.1', () => console.log('Сервер запущен!'));