const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send({ message: 'hello from v2 route' });
})

module.exports = router
