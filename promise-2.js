function tambah(angka1, angka2, hasil) {
  hasil(angka1 + angka2);
}
function kurang(angka1, angka2, hasil) {
  hasil(angka1 - angka2);
}
function kali(angka1, angka2, hasil) {
  hasil(angka1 * angka2);
}
function bagi(angka1, angka2, hasil) {
  hasil(angka1 / angka2);
}
function pangkat(angka1, angka2, hasil) {
  hasil(angka1 ** angka2);
}

function promiseTambah(angka1, angka2) {
  return new Promise((resolve) => {
    tambah(angka1, angka2, function (hasil) {
      resolve(hasil);
    });
  });
}
function promiseKurang(angka1, angka2) {
  return new Promise((resolve) => {
    kurang(angka1, angka2, function (hasil) {
      resolve(hasil);
    });
  });
}
function promiseKali(angka1, angka2) {
  return new Promise((resolve) => {
    kali(angka1, angka2, function (hasil) {
      resolve(hasil);
    });
  });
}
function promiseBagi(angka1, angka2) {
  return new Promise((resolve, reject) => {
    if (angka2 === 0) {
      reject('tidak bisa dibagi dengan 0');
    }
    bagi(angka1, angka2, function (hasil) {
      resolve(hasil);
    });
  });
}
function promisePangkat(angka1, angka2) {
  return new Promise((resolve) => {
    pangkat(angka1, angka2, function (hasil) {
      resolve(hasil);
    });
  });
}

// 10 + 10 - 5 / 3 * 4
tambah(10, 10, function (hasil0) {
  kurang(hasil0, 5, function(hasil1) {
    bagi(hasil1, 3, function (hasil2) {
      kali(hasil2, 4, function (hasil3) {
        console.log(hasil3);
      })
    })
  })
})
let promise1 = promiseTambah(10, 10)
  .then(function (hasil0) {
    return promiseKurang(hasil0, 5)
  })
  .then(function (hasil1) {
    return promiseBagi(hasil1, 0) // error cause
  })
  .then(function (hasil2) {
    return promiseKali(hasil2, 4)
  })
  .then(function (hasil3) {
    console.log('hasil', hasil3);
  })
  .catch(function (error) {
    console.log('error', error);
  });
