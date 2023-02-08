const path = require('path')

const a = path.isAbsolute('/home/dev/Downloads') // absolute
const b = path.isAbsolute('./Downloads/film/avatar') // relative
console.log(a);
console.log(b);
