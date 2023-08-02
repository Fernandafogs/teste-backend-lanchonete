const ClientsModel = require ('../models/clients')

//GET
async function get(req, res) {
    const {id} = req.params

    let obj = {}

    if (id){
        obj._id = id
    }
    const clients = await ClientsModel.find(obj)

    res.send(clients)
    }

//POST
async function post (req, res) {
    const {
        name,
        email,
        phone,
        address,
    } = req.body


    const clients = new ClientsModel ({
        name,
        email,
        phone,
        address,
    })

    clients.save()

    res.send({
        message: 'success'
    })

}


module.exports = {
    get,
    post,
}
