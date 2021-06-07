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
			return res.status(500).send({
				status:500,
				error: true,
				message: "Couldn't create restaurant"
			});
		}else{
			return res.status(200).send({
				status:200,
				error: false,
				message: "Restaurant created succesfully"
			});

		}
	})
}

exports.RestaurantDetails = (req,res) =>{
	Restaurant.FindRestaurantById(req.body.id, function(err, restaurant){
		console.log(restaurant, err);
		if(err){
			return res.status(500).send({
				status:500,
				error: true,
				message: "An error has ocurred"
			});
		}
		else{
			if(!restaurant){
				return res.status(404).send({
					status:404,
					error: true,
					message: "restaurant not found"
				});

			}else{
				return res.status(200).send({
					status:200,
					error: false,
					data: {restaurant}
				});
			}
		}

		
	})

}

exports.ShowAllRestaurants = (req,res) =>{
	Restaurant.FindAllRestaurants(function (err, restaurants_list){
		if(err){
			return res.status(500).send({
				status:500,
				error: true,
				message: "No restaurants to show"
			});
		}else{
			return res.status(200).send({
				status:200,
				error: false,
				data: {restaurants_list}
			});
		}
	})
}
