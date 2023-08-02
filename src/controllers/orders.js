const OrdersModel = require ('../models/orders')

async function get(req, res) {
    const orders = await OrdersModel.find()

    res.send(orders)
}

module.exports = {
    get,
}