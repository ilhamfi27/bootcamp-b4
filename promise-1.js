function cobaAsynchronous(teks, callback) {
    setTimeout(function() {
        str = `hallo saya dari callback: ${teks}`
        callback(str)
    }, 0)
}

let promise = new Promise(function(resolve, reject) {
    cobaAsynchronous('ilham', function(teks) {
        resolve(teks);
    })
})

promise.then(function (hasil) {
    console.log(hasil);
})
