const fs = require('fs');
const path = require('path');
const dbPath = path.resolve(__dirname, './people.json');

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

module.exports = {
  fetch,
};
