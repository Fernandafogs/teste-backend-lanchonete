const express = require('express')
const cors = require('cors')
const path = require('path')
const db = require('./database/db')
const routes = require('./routes/routes')

const app = express()

// Conexão com o banco de dados
db.connect()

const allowedOrigins = [
    'http://127.0.0.1:5500',
    'http://localhost:8080'
]

// Habilita CORS
app.use(
    cors({
        origin: function (origin, callback) {
            let allowed = true

            // Mobile app
            if (!origin) allowed = true

            if (!allowedOrigins.includes(origin)) allowed = false

            callback(null, allowed)
        }
    })
)

// Habilita o servidor para receber dados JSON
app.use(express.json())

// Definindo as rotas
app.use('/api', routes)

// Configuração para servir arquivos estáticos da pasta public
app.use(express.static(path.join(__dirname, 'public')))

// Executando o servidor
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server is listening on port ${port}`))

