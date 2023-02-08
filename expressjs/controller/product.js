const productMobil = [
  {
    merk: 'honda',
    kapasitas: 2500,
    qty: 2,
  },
  {
    merk: 'suzuki',
    kapasitas: 2500,
    qty: 20,
  },
  {
    merk: 'bmw',
    kapasitas: 2500,
    qty: 21,
  },
];
function fetch(req, res) {
  res.send(productMobil);
}
function get(req, res) {
  const productName = req.params.name; // ambil parameter :name

  // filter product nya
  const selectedProduct = productMobil.find((d) => d.merk == productName);
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
  console.log(body);
  res.send({ message: 'hello from post product' });
}

module.exports = {
  fetch,
  get,
  create,
};
