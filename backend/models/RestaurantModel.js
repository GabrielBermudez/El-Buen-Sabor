let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let RestaurantSchema = new Schema({
	name: String,
	phone: Number,
	email: String,
	address_id: String,
	created_at: Date,
	updated_at: Date
});

RestaurantSchema.statics.AddRestaurant = function (Restaurant, callback){
	return this.create(restaurant,callback);
}

RestaurantSchema.statics.FindRestaurantById = function (Restaurant, callback){
	return this.findOne({_id:id}, callback);
}

Restaurant.statics.FindAllRestaurants = function (callback){
	return this.find({}, callback);
}

RestaurantSchema.statics.UpdateRestaurant = function (restaurant, callback) {
	return restaurant.save();
}

RestaurantSchema.statics.DeleteRestaurant = function(Restaurant, callback){
	return this.deleteOne({_id:id}, callback);
}

module.exports = mongoose.model('restaurants', RestaurantSchema);