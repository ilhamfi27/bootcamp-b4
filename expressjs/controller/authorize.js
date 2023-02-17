const crypto = require('crypto');
const dbProduct = require('../database/products');
const algorithm = 'aes-256-ctr';
const key = 'MySuperSecretKeyMySuperSecretKey';

function giveAuthorizeAPIKey(req, res) {
  const username = req.body.username;
  const iv = crypto.randomBytes(16); // mengambil randombytes
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  const result = Buffer.concat([iv, cipher.update(username), cipher.final()]);
  const _key = result.toString('hex');
  res.send({
    apiKey: _key,
  });
}

function authorizeAPIKey(req, res) {
  let apiKey = req.header('x-api-key');
  if (!apiKey || apiKey == '') {
    res.status(403)
  }
  const iv = apiKey.slice(0, 16);
  apiKey = apiKey.slice(16);
  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  const result = Buffer.concat([decipher.update(apiKey), decipher.final()]);
  const products = dbProduct.fetch();
  res.send({ products });
}

module.exports = {
  giveAuthorizeAPIKey,
  authorizeAPIKey,
};
