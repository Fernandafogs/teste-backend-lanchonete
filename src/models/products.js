const mongoose = require ('mongoose')

const ProductsSchema = new mongoose.Schema({
    name: String,
    price: Number,
})

const ProductsModel = mongoose.model ('products', ProductsSchema)

module.exports = ProductsModel