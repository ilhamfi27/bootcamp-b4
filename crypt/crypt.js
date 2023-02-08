const crypto = require('crypto');
console.log(crypto.getHashes());
const words = 'hello world';
const result1 = crypto.createHash('sha256').update(words).digest('hex');
const result2 = crypto.createHash('sha1').update(words).digest('hex');
const result3 = crypto.createHash('md5').update(words).digest('hex');
console.log(result1);
console.log(result2);
console.log(result3);
