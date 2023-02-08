const fs = require('fs')

fs.writeFileSync('./some-file.json', "{}", {
    encoding: 'utf-8'
})

const data = fs.readFileSync('./some-file.json')
console.log(data.toString('utf-8'))