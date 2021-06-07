let express = require('express');
let router = express.Router();

let restaurantController = require('../controllers/api/v1.0/RestaurantController');
let middlewares = require('./middlewares');

router.post('/create', restaurantController.CreateRestaurant);

router.post('/detail', restaurantController.RestaurantDetails);

router.post('/show', restaurantController.ShowAllRestaurants);

module.exports = router;
