let mongoose = require('mongoose')
let Schema = mongoose.Schema

let productSchema = new Schema({
	denominacion: String,
	tiempo_estimado: Number,
	precios_id: Number,
	rubro_id: Number,
})

productSchema.statics.AddProduct = function(product, callback){ //Method for add Rol in schema of database
	return this.create(product,callback);
};

productSchema.statics.FindProductAll = function(callback){ //Method for find alls Rol in schema, i havent filters
	return this.find({},callback);
};

productSchema.statics.FindProductByID = function(id,callback){
	return this.findOne({ _id:id },callback);
};

productSchema.statics.RemoveProductByID = function(id, callback){
	return this.deleteOne({ _id:id },callback);
};

productSchema.statics.UpdateProduct = function(id, product, callback){
	return this.updateOne({_id:id},product,callback);
}

module.exports = mongoose.model('products',productSchema);