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

RestaurantSchema.statics.AddRestaurant = function (restaurant, callback){
	return this.create(restaurant,callback);
}

RestaurantSchema.statics.FindRestaurantById = function (id, callback){
	return this.findOne({_id:id}, callback);
}

RestaurantSchema.statics.FindAllRestaurants = function (callback){
	return this.find({}, callback);
}

RestaurantSchema.statics.UpdateRestaurant = function (id,restaurant,callback) {
	return this.updateOne({_id:id}, restaurant, callback);
}

RestaurantSchema.statics.DeleteRestaurant = function (id, callback){
	return this.deleteOne({_id:id}, callback);
}

module.exports = mongoose.model('restaurants', RestaurantSchema);