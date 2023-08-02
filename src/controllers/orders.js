const OrdersModel = require ('../models/orders')

//GET
async function get(req, res) {
    const {id} = req.params

    let obj = {}

    if (id){
        obj._id = id
    }
    const orders = await OrdersModel.find(obj)

    res.send(orders)
    }

//POST
async function post (req, res) {
    const {
        id_client,
        id_product,
        date,
        status_order,
    } = req.body


    const orders = new OrdersModel ({
        id_client,
        id_product,
        date,
        status_order,
    })

    orders.save()

    res.send({
        message: 'success'
    })

}


module.exports = {
    get,
    post,
}
