let Restaurant = require('../models/RestaurantModel');
let mongoose = require('mongoose');

exports.CreateRestaurant = (req,res) =>{
	let date = new Date();
	let restaurant = new Restaurant({
		name: req.body,
		phone: req.body,
		email: req.body,
		address_id: req.body,
		created_at: date,
		updated_at: date;
	});
	Restaurant.AddRestaurant(restaurant, function(err){
		if(err){
			return next(err);
		}else{
			res.redirect(/algunlugar)
		}
	})
}
