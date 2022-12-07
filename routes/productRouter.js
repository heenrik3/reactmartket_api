import express from 'express'
import * as productController from './../controllers/productController.js'

const router = express.Router()

router.route('/').get(productController.getAll)
router.route('/:slug').get(productController.getOne)

export default router
