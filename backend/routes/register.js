let express = require('express')
let router = express.Router()

//let register_controller = require('../controllers/RegisterController')
//let middlewares = require('./middlewares')

let register_controller = require('../controllers/api/v1.0/RegisterController')

//router.get('/create', middlewares.isNotLoggedIn, register_controller.action_register_create)

router.post('/create',register_controller.register_create)

module.exports = router