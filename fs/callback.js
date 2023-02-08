const fs = require('fs')

fs.writeFile('./some-file.json', "{}", {
    encoding: 'utf-8'
}, function(err) {
    if(err) return console.error(err)

    fs.readFile('./some-file.json', (err, data) => {
        if(err) return console.error(err)
        console.log(data.toString('utf-8'))
    })
})