const express = require('express')
const router = express.Router()

const helloCtrl = require('../controller/hello');
const productCtrl = require('../controller/product');

router.get('/', helloCtrl.index);
router.get('/products', productCtrl.fetch);
router.post('/products', productCtrl.create);
router.get('/products/:name', productCtrl.get);
router.get('/products/:name/detail/:id', productCtrl.get);

module.exports = router
