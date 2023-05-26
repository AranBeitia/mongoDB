const express = require('express')
const router = express.Router()
const ProductController = require('../controllers/ProductController')
const { authentication, isAdmin } = require('../middlewares/authentication')

router.post('/', authentication, isAdmin, ProductController.create)
router.get('/getAll', ProductController.getAll)
router.get('/:_id', ProductController.getById)
router.get('/name/:name', ProductController.getProductsByName)
router.delete('/id/:_id', authentication, isAdmin, ProductController.delete)
router.put('/id/:_id', authentication, isAdmin, ProductController.update)
router.put('/reviews/:_id', authentication, ProductController.insertComment)

module.exports = router
