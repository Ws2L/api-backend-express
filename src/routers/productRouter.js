import express from 'express'
import { createProductController } from '../controllers/product/createProductController.js'
import { listProductController } from '../controllers/product/listProductController.js'

const router = express.Router()

router.post('/', createProductController)
router.get('/', listProductController)
router.get('/:id', getByIdProductController)
router.put('/', editProductController)
router.delete('/:id', deleteProductController)

export default router