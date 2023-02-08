const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const algorithm = 'aes-256-ctr';
let key = 'MySuperSecretKey';
key = crypto
  .createHash('sha256')
  .update(String(key))
  .digest('base64')
  .substr(0, 32);

const encrypt = (buffer) => {
  const iv = crypto.randomBytes(16); // mengambil randombytes
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  const result = Buffer.concat([iv, cipher.update(buffer), cipher.final()]);
  return result;
};

const decrypt = (encrypted) => {
  const iv = encrypted.slice(0, 16);
  encrypted = encrypted.slice(16);
  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  const result = Buffer.concat([decipher.update(encrypted), decipher.final()]);
  return result;
};

const plain = fs.readFileSync(path.resolve(__dirname, 'contoh.txt'));
const encrypted = encrypt(plain);
console.log('Encrypted:', encrypted.toString('hex'));
const decrypted = decrypt(encrypted);
console.log('Decrypted:', decrypted.toString());
