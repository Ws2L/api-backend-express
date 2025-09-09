import { update } from '../../models/profileModel.js'

export const editProfileController = async(req, res) => {
  const id = req.params.id
  const dados = req.body

  const result = await update(+id, dados)

  res.json({
    message: 'Usuario editado com sucesso',
    profile: result
  })
}