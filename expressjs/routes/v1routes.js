const express = require('express')
const router = express.Router()
const multer = require('multer');

const helloCtrl = require('../controller/hello');
const productCtrl = require('../controller/product');
const cookieCtrl = require('../controller/cookie');
const multerUpload = multer({ dest: 'public/images/' })

router.get('/', helloCtrl.index);
router.get('/products', productCtrl.fetch);
router.post('/products', productCtrl.create);
router.post('/products/upload', multerUpload.single('image'), productCtrl.upload);
router.get('/products/:name', productCtrl.get);
router.put('/products/:name', productCtrl.update);
router.delete('/products/:name', productCtrl.destroy);
router.get('/products/:name/detail/:id', productCtrl.get);

router.get('/cookies-read', cookieCtrl.cookieReader)
router.get('/cookies-send', cookieCtrl.cookieSave)
router.get('/session-send', cookieCtrl.sessionSave)

module.exports = router
