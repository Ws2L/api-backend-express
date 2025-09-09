import express from 'express'
import { createProductController } from '../controllers/product/createProductController.js'
import { listProducts } from '../controllers/product/listProductController.js'
import { getProductById } from '../controllers/product/getByIdProductController.js'
import { editProductController } from '../controllers/product/editProductController.js'
import { deleteProductController } from '../controllers/product/deleteProductController.js'

const router = express.Router()

router.post('/', createProductController)
router.get('/', listProducts)
router.get('/:id', getProductById)
router.put('/:id', editProductController)
router.delete('/:id', deleteProductController)

export default router