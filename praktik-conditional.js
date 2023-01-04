/**
 * 1. decision bilangan ganjil genap menggunakan operator ternary
 * 2. decision bilangan kelipatan 7 => angkanya kelipatan 7: true
 * 3. gunakan loop untuk nomor 1 dan 2
 */
// 1
let angka = 7;
let ganjil = angka % 2 === 0 ? 'Genap' : 'Ganjil';
console.log(ganjil);

// 2
let kelipatan7 = angka % 7 === 0 ? 'Kelipatan 7' : 'Bukan';
console.log(kelipatan7);

// 3
for (let i = 0; i < 100; i++) {
  ganjil = i % 2 === 0 ? 'Genap' : 'Ganjil';
  console.log(ganjil);
  kelipatan7 = i % 7 === 0 ? 'Kelipatan 7' : 'Bukan Kelipatan 7';
  console.log(kelipatan7);
}
