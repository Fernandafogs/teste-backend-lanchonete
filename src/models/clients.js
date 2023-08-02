const mongoose = require ('mongoose')

const ClientsSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    address: String,
})

const ClientsModel = mongoose.model ('clients', ClientsSchema)

module.exports = ClientsModel