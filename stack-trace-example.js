function add(a, b) {
  const tambah = 0;
  tambah = a + b;
  return tambah;
}

function average(a, b) {
  return add(a, b);
}

function main() {
  let x = average(10, 20);
  console.log(x);
}

try {
  main();
} catch (error) {
    console.log('name', error.name);
    console.log('message', error.message);
    console.log(error.stack);
}

console.log('ini akan tetap jalan');

// finally {
//   console.log('selesai');
// }
