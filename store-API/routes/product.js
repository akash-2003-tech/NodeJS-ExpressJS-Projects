const express = require('express')

const router = express.Router()

const{ getAllProductsStatic,getAllProduct} = require('../controllers/product')

router.route('/').get(getAllProduct)
router.route('/static').get(getAllProductsStatic)

module.exports = router 