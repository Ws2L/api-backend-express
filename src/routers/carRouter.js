import express from 'express'

const router = express.Router()

router.post('/', (req, res) => {
  const dados = req.body
  console.log(dados)
  res.json({
    message: 'Carro criado com sucesso',
    car: dados
  })
})

router.get('/', (req, res) => {
  res.json({message: 'Carros consultados com sucesso'})
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  res.json({message: `Carro com ID ${id} consultado com sucesso`})
})

router.put('/:id', (req, res) => {
  const id = req.params.id
  const dados = req.body
  res.json({
    message: `${dados.marca} ${dados.modelo} com id ${id} alterado com sucesso`,
    marca: dados.marca,
    modelo: dados.modelo
    })
})

router.delete('/:id', (req, res) => {
  const id = req.params.id
  res.json({ message: `Carro com ID ${id} deletado com sucesso`})
})

export default router