const express = require('express');
const app = express();
const PORT = 3000;

const router = express.Router();

router.get('/', function (request, response) {
  response.end('hello world');
});
router.get('/products', function (request, response) {
  response.end('hello from products page');
});
router.get('/about', function (request, response) {
  response.end('hello from about page');
});
app.use(router);

app.listen(PORT, () => {
  console.log(`application listen on http://localhost:${PORT}`);
});
