function add(a, b) {
  console.trace();
  return a + b;
}

function minus(a, b) {
  console.trace();
  return a - b;
}

function average(a, b, c) {
  console.trace();
  return add(a, b) + minus(a, b) / c;
}

function main() {
  for (let i = 0; i < 5; i++) {
    let avg = average(10, 5, 3);
    console.log(avg);
  }
}

main();
