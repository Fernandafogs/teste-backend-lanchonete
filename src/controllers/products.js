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


module.exports = {
    get,
    post,
}

