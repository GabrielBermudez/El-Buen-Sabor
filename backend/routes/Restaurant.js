let express = require('express');
let router = express.Router();

let restaurantController = require('../controllers/api/v1.0/RestaurantController');
let middlewares = require('./middlewares');

router.post('/create', restaurantController.CreateRestaurant);

module.exports = router;
