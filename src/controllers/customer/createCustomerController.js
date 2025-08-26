export const createCustomerController = (req, res) => {
  const dados = req.body
  console.log(dados)
  res.json({
    message: 'Cliente criado com sucesso',
    customer: dados
  })
}
