async function promisedFunction() {
  return 'hello saya dari promise';
}

async function rejectedPromise() {
  return Promise.reject('rejected')
}

async function main() {
  try {
    let hasil = 0
    hasil = 10 + 10
    hasil = hasil + 3
    hasil = hasil * 10
    console.log('hallo');
    const promised = await promisedFunction()
    console.log(promised);
    console.log('productzilla');
  } catch (error) {
    console.log('errorPromise', error);
  }
}

main()
