export const editProfile = (req, res) => {
  const id = req.params.id
  const dados = req.body
  res.json({
    message: 'Usuario editado com sucesso',
    profile: dados
  })
}
