import express from 'express'

const router = express.Router()

router.post('/', (req, res) => {
  const dados = req.body
  console.log(dados)
  res.json({
    message: 'Usuario criado com sucesso',
    profile: dados
  })
})

router.get('/', (req, res) => {
  res.json({message: 'Usuarios consultados com sucesso'})
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  res.json({message: `Usuario com ID ${id} consultado com sucesso`})
})

router.put('/', (req, res) => {
  const id = req.params.id
  const dados = req.body
  res.json({
    message: 'Usuario editado com sucesso',
    profile: dados
    })
})

router.delete('/:id', (req, res) => {
  const id = req.params.id
  res.json({ message: `Usuario com ID ${id} deletado com sucesso`})
})

export default router