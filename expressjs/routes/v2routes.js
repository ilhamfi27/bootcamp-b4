const express = require('express');
const router = express.Router();
const autorizeCtrl = require('../controller/authorize');
const cachingCtrl = require('../controller/caching');
const apicache = require('apicache');

const cache = apicache.middleware

router.get('/', (req, res) => {
  res.send({ message: 'hello from v2 route' });
});
router.get('/read-header', (req, res) => {
  let auth = req.header('Authorization'); //read
  let userAgent = req.header('User-Agent');
  res.send({ auth, userAgent });
});
router.get('/set-header', (req, res) => {
  res.set('Content-Type', 'text/html'); // set header
  res.send({ hello: 'world' });
});
router.get('/get-custom-header', (req, res) => {
  const apiKey = req.header('x-api-key');
  const billingStatus = req.header('x-billing');
  const noXBillingStatus = req.header('billing');
  if (!apiKey) {
    res.status(403).send({ message: 'no api key' });
  } else {
    res.send({ hello: 'world' });
  }
});
router.post('/access-api', autorizeCtrl.giveAuthorizeAPIKey);
router.get('/access-data', autorizeCtrl.authorizeAPIKey);

router.get('/no-cache', cachingCtrl.noCache);
router.get('/cache-2-minutes', cachingCtrl.twoMinutesCache);
router.get('/cache-content', cache(1000 * 60 * 1), cachingCtrl.cacheContent);

module.exports = router;
