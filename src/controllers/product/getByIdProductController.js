import { getById } from '../../models/productModel.js'

export const getProductById = async (req, res) => {
  const id = req.params.id

  const result = await getById (+id)

  res.json({message: `Produto com ID ${id} consultado com sucesso`,
  product: result
  })
}