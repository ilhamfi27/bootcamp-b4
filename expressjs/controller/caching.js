const dbPeople = require('./../database/people');
const axios = require('axios');

function noCache(req, res) {
  res.set('Cache-control', 'no-store');
  res.send({
    message: 'this route wont be cached',
    timestamp: new Date().getTime(),
  });
}

function twoMinutesCache(req, res) {
  res.set('Cache-control', `public, max-age=${60 * 2}`);
  res.send({
    message: 'this route will be cached',
    timestamp: new Date().getTime(),
  });
}

async function cacheContent(req, res) {
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    res.send(response.data);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

module.exports = {
  noCache,
  twoMinutesCache,
  cacheContent,
};

/**
 * npm install axios
 * npm install apicache
 */
