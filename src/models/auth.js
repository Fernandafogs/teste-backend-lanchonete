const mongoose = require('mongoose')

const AuthSchema = new mongoose.Schema({
    username: String,
    password: String,
})

const AuthModel = mongoose.model('auth', AuthSchema)

module.exports = AuthModel

