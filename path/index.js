const path = require('path');

const file = path.basename(__filename)
console.log(file);
const filepath = path.resolve(file)
console.log(filepath);
