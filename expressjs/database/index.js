const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://root:root@127.0.0.1:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'toko';

let conn;
try {
  conn = await client.connect();
} catch (e) {
  console.error(e);
}

let db = conn.db(dbName);

module.exports = db;
