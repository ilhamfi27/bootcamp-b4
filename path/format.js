const path = require('path');

const pathUtuh = path.format({
  base: 'basename.js',
  root: '/',
  dir: 'path/bootcamp/nodejs',
});
console.log(pathUtuh);
