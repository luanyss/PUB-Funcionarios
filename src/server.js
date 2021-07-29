const express = require('express')
const cors = require('cors')

//Configs
const app = express()

//Import Router
const rotasFuncionarios = require('./controller/funcionario-controller')

//Import DB
const db = require('./infra/sqlite-db')

//Middlewares
app.use(express.json())
app.use(cors())

//Usando Rotas
rotasFuncionarios(app,db)


//Listen
app.listen(process.env.PORT||3056,()=>{
    console.log(`Servidor rodando na porta: ${process.env.PORT||3056}`)
})

