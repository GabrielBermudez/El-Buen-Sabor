let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let CategorySchema = new Schema({
	denomination: String,
	created_at: Date,
	updated_at: Date
});

CategorySchema.statics.CreateCategory = function (category, callback){
	return this.create(category, callback);
}

CategorySchema.statics.FindCategoryById = function (id, callback){
	return this.findOne({_id:id}, callback);
}

CategorySchema.statics.FindAllCategories = function (callback){
	return this.find({}, callback);
}

CategorySchema.statics.UpdateCategory = function (id, category, callback){
	return this.updateOne({_id:id}, category, callback);
}

CategorySchema.statics.DeleteCategory = function (id, callback){
	return this.deleteOne({_id:id}, callback);
}

module.exports = mongoose.model('categories', CategorySchema);