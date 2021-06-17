let Article = require('../../../models/ArticleModel');
let mongoose = require('mongoose');

exports.Create = (req,res) => {
	let date = new Date();
	let article = new Article({
		denomination: req.body.denomination,
		cost: req.body.cost,
		current_stock: req.body.current_stock,
		minimun_sotck: req.body.minimun_sotck,
		unit: req.body.unit,
		ingredient: req.body.ingredient,
		product_id: 0,
		created_at: date,
		updated_at: date
	});
	Article.CreateArticle(article, function(err){
		if(err){
			return res.status(500).send({
				status:500,
				error:true,
				message: "Couldn't create article"
			});
		}else{
			return res.status(200).send({
				status:200,
				error:true,
				message: "Article created successfully"
			});
		}
	})
}

exports.ArticleDetail = (req,res) =>{
	Article.FindArticleById(req.params.id, function(err, article){
		if(err){
			return res.status(500).send({
				status:500,
				error: true,
				message: "An error has ocurred"
			});
		}else{
			if(!article){
				return res.status(404).send({
					status:404,
					error:true,
					message: "Article not found"
				});
			}else{
				return res.status(200).send({
					status:200,
					error:false,
					data: {article}
				});
			}
		}
	})
}

exports.ShowAllArticles = (req,res) =>{
	Article.FindAllArticles(function(err, articles_list){
		if(err){
			return res.status(500).send({
				status:500,
				error:true,
				message:"No articles to show"
			});
		}else{
			return res.status(200).send({
				status:200,
				error:false,
				data: {articles_list}
			});
		}
	})
}

exports.ArticleUpdate = (req,res) =>{
	let date = new Date();
	Article.UpdateArticle({_id:req.params.id},{
		$set:{
			denomination: req.body.denomination,
			cost: req.body.cost,
			current_stock: req.body.current_stock,
			minimun_sotck: req.body.minimun_sotck,
			unit: req.body.unit,
			ingredient: req.body.ingredient,
			product_id: 0,
			updated_at: date
		}
	}, function(err, info){
		if(err){
			return res.status(500).send({
				status:500,
				error:true,
				message: "Update cannot be done"
			});
		}else{
			return res.status(200).send({
				status:200,
				error:false,
				message: "Article updated successfully"
			});
		}
	})
}

exports.ArticleDelete = (req,res) =>{
	Article.DeleteArticle({_id:req.params.id}, function(err){
		if(err){
			return res.status(500).send({
				status:500,
				error:true,
				message: "Article cannot be deleted"
			});
		}else{
			return res.status(200).send({
				status:200,
				error: false,
				message: "Article deleted successfully"
			});
		}
	})
}