let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let AddressSchema = new Schema({
	street: String,
	street_no: Number,
	city: String,
	created_at: Date,
	updated_at: Date,
});

AddressSchema.statics.Create = function (address, callback){
	return this.create(address, callback); 
}

AddressSchema.statics.FindAddressByID = function (id, callback){
	return this.findOne({_id:id}, callback);
}

AddressSchema.statics.FindAllAdresses = function (callback){
	return this.find({}, callback);
}

AddressSchema.statics.UpdateAddress = function (id, address, callback){
	return this.updateOne({_id:id}, address, callback);
}

AddressSchema.statics.Delete = function (id, callback){
	return this.deleteOne({_id:id}, callback);
}

module.exports = mongoose.model('adresses', AddressSchema);