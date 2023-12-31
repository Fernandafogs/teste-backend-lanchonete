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

//PUT
async function put(req, res){
    const { id } = req.params

    const orders= await OrdersModel.findByIdAndUpdate({_id: id }, req.body, { new: true})

    res.send ({
        message: 'success',
        orders,
    })

}

//DELETE
async function remove(req, res) {
    const { id } = req.params

    const remove = await OrdersModel.deleteOne({ _id: id })

    let message = 'success'

    if (remove.error) {
        message = 'error'
    }

    res.send({
        message: message
    })
}


module.exports = {
    get,
    post,
    put,
    remove,
}

