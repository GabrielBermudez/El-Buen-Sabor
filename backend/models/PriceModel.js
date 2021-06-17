let mongoose = require('mongoose')
let Schema = mongoose.Schema

let priceSchema = new Schema({
	monto: Number,
	fecha_creacion: Date,
	fecha_actualizacion: Date
})

priceSchema.statics.AddPrice = function(prices, callback){ //Method for add Price in schema of database
	return this.create(prices,callback);
};

priceSchema.statics.FindPricesAll = function(callback){ //Method for find alls Price in schema, i havent filters
	return this.find({},callback);
};

priceSchema.statics.FindPriceByID = function(id,callback){
	return this.findOne({ _id:id },callback);
};

priceSchema.statics.RemovePriceByID = function(id, callback){
	return this.deleteOne({ _id:id },callback);
};

priceSchema.statics.UpdatePrice = function(id, prices, callback){
	return this.updateOne({_id:id},prices,callback);
}

module.exports = mongoose.model('prices',priceSchema);