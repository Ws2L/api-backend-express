import express from 'express'
import { createSupplier } from '../controllers/supplier/createSupplierController.js'
import { listSuppliers } from '../controllers/supplier/listSupplierController.js'
import { getSupplierById } from '../controllers/supplier/getByIdSupplierController.js'
import { editSupplier } from '../controllers/supplier/editSupplierController.js'
import { deleteSupplier } from '../controllers/supplier/deleteSupplierController.js'

const router = express.Router()

router.post('/', createSupplier)
router.get('/', listSuppliers)
router.get('/:id', getSupplierById)
router.put('/:id', editSupplier)
router.delete('/:id', deleteSupplier)

export default router