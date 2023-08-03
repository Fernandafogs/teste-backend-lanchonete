const ProductsModel = require ('../models/products')

//GET
async function get(req, res) {
    const {id} = req.params

    let obj = {}

    if (id){
        obj._id = id
    }
    const products = await ProductsModel.find(obj)

    res.send(products)
    }


//POST
async function post (req, res) {
    const {
        name,
        price,
    } = req.body


    const products = new ProductsModel ({
        name,
        price,
    })

    products.save()

    res.send({
        message: 'success'
    })

}

//PUT
async function put(req, res){
    const { id } = req.params

    const products= await ProductsModel.findByIdAndUpdate({_id: id }, req.body, { new: true})

    res.send ({
        message: 'success',
        products,
    })

}


//DELETE
async function remove(req, res) {
    const { id } = req.params

    const remove = await ProductsModel.deleteOne({ _id: id })

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
