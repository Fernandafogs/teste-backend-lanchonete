const ClientsModel = require ('../models/clients')

async function get(req, res) {
    const clients = await ClientsModel.find()

    res.send(clients)
}

module.exports = {
    get,
}