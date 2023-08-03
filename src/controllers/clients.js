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

//PUT
async function put(req, res){
    const { id } = req.params

    const clients= await ClientsModel.findByIdAndUpdate({_id: id }, req.body, { new: true})

    res.send ({
        message: 'success',
        clients,
    })

}

//DELETE
async function remove(req, res) {
    const { id } = req.params

    const remove = await ClientsModel.deleteOne({ _id: id })

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
