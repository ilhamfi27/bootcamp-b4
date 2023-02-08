let iniPromise = new Promise(function (resolve, reject) {
    let a = 10
    let b = 1
    if (b !== 0) {
        let hasil = a / b
        resolve(hasil)
    } else {
        reject('angka tidak bisa dibagi dengan 0')
    }
});

iniPromise
  .then(function (data) {
    // fullfiled
    console.log('data:', data);
  })
  .catch(function (error) {
    // rejected
    console.log('error:', error);
  })
  .finally(function () {
    console.log('selesai');
  });
