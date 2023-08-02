const OrdersModel = require ('../models/orders')

async function get(req, res) {
    const {id} = req.params

    let obj = {}

    if (id){
        obj._id = id
    }
    const orders = await OrdersModel.find(obj)

    res.send(orders)
    }


module.exports = {
    get,
}