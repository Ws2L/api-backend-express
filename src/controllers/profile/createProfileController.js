export const createProfile = (req, res) => {
  const dados = req.body
  console.log(dados)
  res.json({
    message: 'Usuario criado com sucesso',
    profile: dados
  })
}
