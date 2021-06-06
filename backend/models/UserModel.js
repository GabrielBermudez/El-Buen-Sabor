let mongoose = require('mongoose')
let Schema = mongoose.Schema

let userSchema = new Schema({
	name: String,
	lastname: String,
	dni: Number,
	age: Number,
	email: String,
	user: String,
	password: String,
	telephone: String,
	mobile: String,
	url_image: String,
	condition: Boolean,
	rol_id: String,
	address_id: String,
	created_at: Date,
	updated_at: Date,



})

userSchema.statics.AddUser = function(user, callback){ //Method for add user in schema of database
	return this.create(user,callback);
};

userSchema.statics.FindUserAll = function(callback){ //Method for find alls user in schema, i havent filters
	return this.find({},callback);
};

userSchema.statics.FindUserByDNI = function(dni,callback){
	return this.findOne({ dni:dni },callback);
};

userSchema.statics.FindUserByID = function(id,callback){
	return this.findOne({ _id:id },callback);
};

userSchema.statics.FindUserByEmailAndPassword = function(email,password,callback){
	return this.findOne({email:email,password:password},callback);
};

userSchema.statics.FindUserByEmail = function(email,callback){
	return this.findOne({email:email},callback);
};


userSchema.statics.RemoveUserByDNI = function(dni, callback){
	return this.deleteOne({ dni:dni },callback);
};

userSchema.statics.UpdateUser = function(user, callback){
	return user.save()
}

module.exports = mongoose.model('users',userSchema);