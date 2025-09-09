import express from 'express'
import { createProfileController } from '../controllers/profile/createProfileController.js'
import { listProfiles } from '../controllers/profile/listProfileController.js'
import { getProfileById } from '../controllers/profile/getByIdProfileController.js'
import { editProfileController } from '../controllers/profile/editProfileController.js'
import { deleteProfileController } from '../controllers/profile/deleteProfileController.js'

const router = express.Router()

router.post('/', createProfileController)
router.get('/', listProfiles)
router.get('/:id', getProfileById)
router.put('/:id', editProfileController)
router.delete('/:id', deleteProfileController)

export default router