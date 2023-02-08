const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const getUserByPassword = (username, password) => {
  const userdb = fs.readFileSync(path.resolve(__dirname, 'userdb.json'));
  const user = JSON.parse(userdb.toString('utf-8'));
  const encryptedPassword = crypto
    .createHash('sha1')
    .update(password)
    .digest('hex');
  return user.find(
    (d) => d.username === username && d.password === encryptedPassword
  );
};

module.exports = {
  getUserByPassword,
};
