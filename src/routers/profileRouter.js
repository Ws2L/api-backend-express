import express from 'express'
import { createProfile } from '../controllers/profile/createProfileController.js'
import { listProfiles } from '../controllers/profile/listProfileController.js'
import { getProfileById } from '../controllers/profile/getByIdProfileController.js'
import { editProfile } from '../controllers/profile/editProfileController.js'
import { deleteProfile } from '../controllers/profile/deleteProfileController.js'

const router = express.Router()

router.post('/', createProfile)
router.get('/', listProfiles)
router.get('/:id', getProfileById)
router.put('/:id', editProfile)
router.delete('/:id', deleteProfile)

export default router