const dbProduct = require('./../database/products');

function fetch(req, res) {
  const data = dbProduct.fetch();
  res.send(data);
}
function get(req, res) {
  const productName = req.params.name; // ambil parameter :name
  const selectedProduct = dbProduct.getOne(productName);
  let data = {},
    responseStatus = 200;
  if (selectedProduct) {
    data = selectedProduct;
  } else {
    data = { message: 'produk tidak ditemukan' };
    responseStatus = 404;
  }
  // outputkan
  res.status(responseStatus).send(data);
}
function create(req, res) {
  const body = req.body;
  const result = dbProduct.create(body);
  res.send(result);
}
function update(req, res) {
  const productName = req.params.name;
  const body = req.body;
  const result = dbProduct.update(body, productName);
  res.send(result);
}
function destroy(req, res) {
  const productName = req.params.name;
  dbProduct.destroy(productName);
  res.sendStatus(204);
}

module.exports = {
  fetch,
  get,
  create,
  update,
  destroy,
};
