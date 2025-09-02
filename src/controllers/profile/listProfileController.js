import { list } from "../../models/profileModel.js"

export const listProfiles = async (req, res) => {

  const result = await list()

  res.json({
    message: 'Usuarios consultados com sucesso',
    profiles: result
  })
}