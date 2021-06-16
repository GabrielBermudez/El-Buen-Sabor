let mongoose = require('mongoose')
let Schema = mongoose.Schema

let rolSchema = new Schema({
	denominacion: String
})

rolSchema.statics.AddRol = function(rol, callback){ //Method for add Rol in schema of database
	return this.create(rol,callback);
};

rolSchema.statics.FindRolAll = function(callback){ //Method for find alls Rol in schema, i havent filters
	return this.find({},callback);
};

rolSchema.statics.FindRolByID = function(id,callback){
	return this.findOne({ _id:id },callback);
};

rolSchema.statics.RemoveRolByID = function(id, callback){
	return this.deleteOne({ _id:id },callback);
};

rolSchema.statics.UpdateRol = function(id,rol, callback){
	return this.updateOne({_id:id},rol,callback);
}

module.exports = mongoose.model('roles',rolSchema);