export const getProfileById = (req, res) => {
  const id = req.params.id
  res.json({message: `Usuario com ID ${id} consultado com sucesso`})
}
