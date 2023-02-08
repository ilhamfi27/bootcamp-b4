class MyErrorException extends Error {
  constructor(e) {
    super();
    this.message = e.message;
    this.error = e.error;
    this.code = e.code;
    this.error_details = e.error_details;
  }
}

function add(angka1, angka2) {
  const jumlah = 0;
  try {
    jumlah = angka1 + angka2;
  } catch (error) {
    console.log(error.message);
  }
  return jumlah;
}

function average(a, b, c) {
  if (c == 0) {
    throw new MyErrorException({
      message: 'tidak bisa dibagi 0',
      error: 'Undividable',
      code: '500',
      error_details: 'detail',
    });
  }
  return add(a, b) / c;
}

function evenOrOdd(number) {
  return number % 2 == 0 ? 'even' : 'odd';
}

function main() {
  const x = average(50, 50, 10);
  console.log(x);
}

try {
  main();
  evenOrOdd();
} catch (error) {
  console.log('ada error');
  console.log('message', error.message);
  console.log('code', error.code);
}
console.log('selesai');

/**
 * dengan menggunakan try catch dan throw
 * buat lah function penjumlahan, pengurangan, pembagian dan perkalian
 * yang memunculkan error jika:
 * - inputan bukan angka
 * - khusus pembagian: pembagi = 0
 */
