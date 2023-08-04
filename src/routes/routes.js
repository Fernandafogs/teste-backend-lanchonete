const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth')
const adminController = require('../controllers/admin')
const ClientController = require('../controllers/clients')
const ProductController = require('../controllers/products')
const OrderController = require('../controllers/orders')

// ROTA DE AUTENTICAÇÃO
router.post('/login', authController.post)

// ROTA PAINEL ADMINISTRATIVO
router.get('/admin', adminController.getAdminPage)

// CLIENTS
router.get('/clients/:id?', ClientController.get)
router.post('/clients', ClientController.post)
router.put('/clients/:id', ClientController.put)
router.delete('/clients/:id', ClientController.remove)

// PRODUCTS
router.get('/products/:id?', ProductController.get)
router.post('/products', ProductController.post)
router.put('/products/:id', ProductController.put)
router.delete('/products/:id', ProductController.remove)

// ORDERS
router.get('/orders/:id?', OrderController.get)
router.post('/orders', OrderController.post)
router.put('/orders/:id', OrderController.put)
router.delete('/orders/:id', OrderController.remove)

// Exporte o roteador
module.exports = router


