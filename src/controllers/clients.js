const ClientsModel = require ('../models/clients')

async function get(req, res) {
    const {id} = req.params

    let obj = {}

    if (id){
        obj._id = id
    }
    const clients = await ClientsModel.find(obj)

    res.send(clients)
    }


module.exports = {
    get,
}