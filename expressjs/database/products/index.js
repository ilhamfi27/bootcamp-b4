const fs = require('fs');
const path = require('path');
const dbPath = path.resolve(__dirname, './products.json');

function getDataFromDatabase() {
  let data = fs.readFileSync(dbPath);
  data = data.toString('utf-8');
  return JSON.parse(data);
}

function writeData(data) {
  fs.writeFileSync(dbPath, JSON.stringify(data), { encoding: 'utf-8' });
}

function fetch() {
  let data = getDataFromDatabase();
  return data;
}

function getOne(productName) {
  let data = getDataFromDatabase();
  return data.find((d) => d.merk == productName);
}

function create(bodyData) {
  let data = getDataFromDatabase();
  data.push(bodyData);
  writeData(bodyData);
  return bodyData;
}

function update(bodyData, productName) {
  let data = getOne(productName); // todo: nanti throw juga
  let allData = fetch();
  data = { ...data, ...bodyData }; // object spread
  const index = allData.findIndex((d) => d.merk == productName);
  if (!index || !data) {
    throw Error('data product tidak ditemukan')
  }
  allData[index] = data;
  writeData(allData);
  return data;
}

function destroy(productName) {
  let data = fetch();
  data = data.filter((d) => d.merk != productName);
  writeData(data);
}

module.exports = {
  fetch,
  create,
  getOne,
  update,
  destroy
};
