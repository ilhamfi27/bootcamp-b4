let axios = require('axios');

async function getData() {
  let hasil = await axios.get('https://swapi.dev/api/people/1');
  return {
    nama: hasil.data.name,
    tinggiBadan: hasil.data.height,
    beratBadan: hasil.data.mass
  }
}

async function main() {
    console.log('starting');
    getData().then((d) => {
        console.log(d);
    });
    console.log('end');
}

main()
