let express = require('express');
let router = express.Router();

let addressController = require('../controllers/api/v1.0/AddressController');
let middlewares = require('./middlewares');

router.post('/create', addressController.CreateAddress);

router.post('/details/:id', addressController.AddressDetails);

router.post('/show', addressController.ShowAllAdresses);

router.post('/update/:id', addressController.AddressUpdate);

router.post('/delete/:id', addressController.DeleteAddress);

module.exports = router;