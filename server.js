const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
  console.log(req.method);
  console.log(req.url);
  console.log(req.headers);

  res.writeHead(200, {
    'Content-Type': 'text/plain; charset=utf-8'
  });

  res.end('Приветикус!');
});

server.listen(3000, '127.0.0.1', () => console.log('Сервер запущен!'));