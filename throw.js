const a = 10;
const b = 0;

class MyErrorException extends Error {
  constructor(e) {
    super();
    this.message = e.message;
    this.error = e.error;
    this.code = e.code;
    this.error_details = e.error_details;
  }
}

function bagi(angka1, angka2) {
  if (angka2 == 0) {
    throw new MyErrorException({
      message: 'angka tidak bisa dibagi 0',
      error: 'Cannot divide by zero',
      error_details: 'detail',
      code: 500
    });
  }
  return angka1 / angka2;
}
console.log('pembagian');
console.log('hasil bagi: ', bagi(a, 0));
console.log('pembagian selesai');
