let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ArticleSchema = new Schema({
	denomination: String,
	cost: Number,
	current_stock: Number,
	minimun_sotck: Number,
	unit: String,
	ingredient: Boolean,
	product_id: 0,
	created_at: Date,
	updated_at: Date
});

ArticleSchema.statics.CreateArticle = function (article, callback){
	return this.create(article, callback);
}

ArticleSchema.statics.FindArticleById = function (id, callback){
	return this.findOne({_id:id}, callback);
}

ArticleSchema.statics.FindAllArticles = function (callback){
	return this.find({}, callback);
}

ArticleSchema.statics.UpdateArticle = function (id, article, callback){
	return this.updateOne({_id:id}, article, callback);
}

ArticleSchema.statics.DeleteArticle = function (id, callback){
	return this.deleteOne({_id:id}, callback);
}

module.exports = mongoose.model('articles', ArticleSchema);