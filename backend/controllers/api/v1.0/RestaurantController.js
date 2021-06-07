let Restaurant = require('../../../models/RestaurantModel');
let mongoose = require('mongoose');

exports.CreateRestaurant = (req,res) =>{
	let date = new Date();
	let restaurant = new Restaurant({
		name: req.body.name,
		phone: req.body.phone,
		email: req.body.email,
		address_id: req.body.address,
		created_at: date,
		updated_at: date
	});
	Restaurant.AddRestaurant(restaurant, function(err){
		if(err){
			return next(err);
		}else{
			res.status(200).send({
				status:200,
				error: false,
				message: "restaurant created succesfully"
			});

		}
	})
}

exports.RestaurantDetails = (req,res) =>{
	Restaurant.FindRestaurantById(req.params.id, function(err, restaurant){
		if(err){
			return next(err);
		}else{
			res.render("/algunotrolugar", {restaurant});
		}
	})

}

exports.ShowAllRestaurants = (req,res) =>{

}
