const { id } = require('apicache');
const { MongoClient, ObjectId } = require('mongodb');

// Connection URL
const url = 'mongodb://root:root@127.0.0.1:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'toko';

async function fetchMobil() {
  // Use connect method to connect to the server
  await client.connect();
  const db = client.db(dbName);
  const collection = await db.collection('mobil').find({}).toArray();
  return collection;
}

async function getOneMobil(id) {
  // Use connect method to connect to the server
  await client.connect();
  const db = client.db(dbName);
  const collection = await db
    .collection('mobil')
    .findOne({ _id: new ObjectId(id) });
  return collection;
}

async function createMobil(data) {
  // Use connect method to connect to the server
  await client.connect();
  const db = client.db(dbName);
  const collection = await db
    .collection('mobil')
    .insertOne({ ...data, _id: new ObjectId(new Date().getTime()) });
  return collection;
}

async function updateMobil(data, id) {
  // Use connect method to connect to the server
  await client.connect();
  const db = client.db(dbName);
  const collection = await db
    .collection('mobil')
    .updateOne({ _id: new ObjectId(id) }, { $set: data });
  return collection;
}

async function deleteMobil(id) {
  // Use connect method to connect to the server
  await client.connect();
  const db = client.db(dbName);
  const collection = await db
    .collection('mobil')
    .deleteOne({ _id: new ObjectId(id) });
  return collection;
}

module.exports = {
  fetchMobil,
  getOneMobil,
  createMobil,
  updateMobil,
  deleteMobil,
};
