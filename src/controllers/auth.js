const AuthModel = require('../models/auth')

const adminUser = 'admin'
const adminPassword = 'teste'

async function post(req, res) {
    const { 
        username, 
        password
    } = req.body

    if (username === adminUser && password === adminPassword) {
        res.json({ message: 'Login realizado com sucesso' })
    } else {
        res.status(401).json({ message: 'Dados inválidos' })
    }
}

module.exports = {
    post
}
