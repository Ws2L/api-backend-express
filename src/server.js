import express from 'express'

const app = express()
const port = 3333

/*app.get('/', (req, res) => {
  console.log(req)
  res.send('Olá mundo API!')
})

app.get('/', (req, res) => {
  console.log('Foi feito um GET na raiz /')
  res.json({message: 'Olá mundo JSON!'})
})

app.get('/produto', (req, res) => {
  console.log('Foi feito um GET no /produto')
  res.json({produto: 'PC Gamer'})
})

app.post('/produto', (req, res) => {
  console.log('Foi feito um POST no /produto')
  res.json({message: 'Criado com sucesso'})
})

app.put('/user', (req, res) => {
  console.log('Foi feito um PUT no /user')
  res.json({message: 'Usuario editado com sucesso'})
})

app.delete('/user', (req, res) => {
  console.log('Foi feito um DELETE no /user')
  res.json({message: 'Usuario deletado com sucesso'})
})
*/
app.use(express.json())

app.post('/profile', (req, res) => {
  const dados = req.body
  console.log(dados)
  res.json({
    message: 'Usuario criado com sucesso',
    profile: dados
  })
})

app.get('/profile', (req, res) => {
  res.json({message: 'Usuario consultado com sucesso'})
})

app.put('/profile', (req, res) => {
  res.json({message: 'Usuario editado com sucesso'})
})

app.delete('/profile', (req, res) => {
  res.json({message: 'Usuario deletado com sucesso'})
})

app.listen(3333, () => {
  console.log(`API Rodando em http://localhost:${port}`)
})