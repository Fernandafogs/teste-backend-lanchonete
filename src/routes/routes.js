const router = require ('express').Router()

//FRONTEND
const authController = require('../controllers/auth')
const adminController = require('../controllers/admin')

// ROTA DE AUTENTICAÇÃO
router.post('/login', authController.login)

//ROTA PAINEL ADMINISTRATIVO
router.get('/admin', adminController.getAdminPage)


//CLIENTS
const ClientController = require ('../controllers/clients')

router.get('/clients/:id?', ClientController.get)
router.post('/clients', ClientController.post)
router.put('/clients/:id', ClientController.put)
router.delete('/clients/:id', ClientController.remove)


//PRODUCTS
const ProductController = require ('../controllers/products')

router.get('/products/:id?', ProductController.get)
router.post('/products', ProductController.post)
router.put('/products/:id', ProductController.put)
router.delete('/products/:id', ProductController.remove)


//ORDERS
const OrderController = require ('../controllers/orders')

router.get('/orders/:id?', OrderController.get)
router.post('/orders', OrderController.post)
router.put('/orders/:id', OrderController.put)
router.delete('/orders/:id', OrderController.remove)


module.exports = router

