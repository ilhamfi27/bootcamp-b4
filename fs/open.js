const fs = require('fs')

const filesystem = fs.openSync('./some-file.json', 777)

console.log(filesystem)