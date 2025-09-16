# Comandos

Liberar o poweshell (Set-ExecutionPolicy RemoteSigned -Scope CurrentUser)

npm init // cria o package.json para iniciar um projeto node
npm i nome_pacote // instala um pacote específico
npm install // instala todos os pacotes do package.json
                        ou
npm i // instala todos os pacotes do package.json

apenas o scrpt 'start' pode ser rodado no npm sem 'run'

node - 

# Comandos Git

git init - inicia o git em uma pasta
git remote add origin _url_do_github_ // vincula meu projeto local ao repositorio do github 

# Tópicos Importantes

* oque framework- conjunto de recursos ou ferramentas para resolver um problema
* o que é javascript- linguagem de programaçao muito popular para web
* o que é node- ambiente ou runtime que executa o js nos terminais
* o que é express - um framework para desenvolver o back do site e criar api
* o que é NPM (Node Package Manager)gerenciador de pacotes do node
* protocolo http - protocolo que determina as regras das requisições e respostas da web
* metodos http (GET - obter e pegar dados, POST - enviar e cadastrar dados, PUT - editar dados completos , PATCH - editar parcialmente os dados, DELETE - excluir dados)

* como mudar o formato de importação/exportação de require para import - adicionar no package.json a propriedade type: module

--watch (parametro para rodar um js em modo dev, que permite rodar novamente o script quando algum arquivo é alterado)

- Router (Para que separar as rotas?)

Sintaxe básica de uma rota da API

app.post('/produto', (req, res) => {
    res.json({message: 'Criado com sucesso!'})
})

- método criar ou inserir: post
- rota ou endereço: /produto
- tipo de resposta: json

ORM - object, relational, model (relacionamento de objeto do javascript com a base de dados) facilidade de alterar a base de dados e facilidade de escrever os comandos pois ja possui comandos prontos

dependencias do projeto
dependencias dev sao usadas somente durante o desenvolvimento do projeto

#prisma

- instalação do prisma
 - npm i prisma -D
 - npm i @prisma/client

- inicializar o prisma
 - npx prisma init

- gerar o model do prisma a partir de um banco de dados existente
 - npx prisma db pull

- gerar o banco de dados a partir de um model de prisma
 - npx prisma db push

- gerar os arquivos necessarios para usar o prisma client no código
 - npx prisma generate

 cors libera o acesso ao servidor da web

 req - passa a url, verifica se mandou json, qual metodo foi enviado, etc
 req.method - atraves dele se consegue saber o metodo que está sendo usado
 res - 

 middleware - padrao de projeto do express que organiza um codigo em uma sequencia de funções e cada uma dessas funções tem uma responsbilidade e quando termina essa função ela manda para o proximo middleware

 funçao next - confirma a finalização das obrigações do middleware e passa para o proximo