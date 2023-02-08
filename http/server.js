const http = require('http');
const aboutCtrl = require('./controller/about');
const productsCtrl = require('./controller/products');
const server = http.createServer((request, response) => {
  const url = request.url.split('/');
  response.writeHead(200, { 'Content-Type': 'application/json' });
  switch (url[1].split('?')[0]) {
    case 'about':
      aboutCtrl.index(request, response);
      break;
    case 'products':
      productsCtrl.index(request, response);
      break;

    default:
      response.write(
        JSON.stringify({
          message: 'welcome to my webserver',
        })
      );
      break;
  }
  response.end();
});
const PORT = 3000;

server.listen(PORT);
console.log(`server berjalan di http://localhost:${PORT}`);
