const mongoose = require ('mongoose')

const OrdersSchema = new mongoose.Schema({
    id_client: Number,
    id_product: Number,
    date: Number,
    status_order: String,

})

const OrdersModel = mongoose.model ('orders', OrdersSchema)

module.exports = OrdersModel