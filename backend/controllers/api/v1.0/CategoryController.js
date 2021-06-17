let Category = require('../../../models/CategoryModel');
let mongoose = require('mongoose');

exports.Create = (req,res) =>{
	let date = new Date();
	let category = new Category({
		denomination: req.body.denomination,
		created_at: date,
		updated_at: date
	});
	Category.CreateCategory(category, function(err){
		if(err){
			return res.status(500).send({
				status:500,
				error:true,
				message: "Couldn't create category"
			});
		}else{
			return res.status(200).send({
				status:200,
				error:false,
				message: "Category create successfully"
			});
		}
	})
}

exports.Detail = (req,res) =>{
	Category.FindCategoryById(req.params.id, function(err, category){
		if(err){
			return res.status(500).send({
				status:500,
				error:true,
				message: "An error has ocurred"
			});
		}else{
			if(!category){
				return res.status(404).send({
					status:404,
					error:true,
					message: "Category not found"
				});
			}else{
				return res.status(200).send({
					status:200,
					error:false,
					data: {category}
				});
			}
		}
	})
}

exports.Show = (req,res) =>{
	Category.FindAllCategories(function(err, categories_list){
		if(err){
			return res.status(500).send({
				status:500,
				error:true,
				message: "No categories to show"
			});
		}else{
			return res.status(200).send({
				status:200,
				error: false,
				data: {categories_list}
			});
		}
	})
}

exports.Update = (req,res) =>{
	let date = new Date();
	Category.UpdateCategory({_id:req.params.id},{
		$set:{
			denomination: req.body.denomination,
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
				message: "Category updated successfully"
			});
		}
	})
}

exports.Delete = (req,res) =>{
	Category.DeleteCategory({_id:req.params.id}, function(err){
		if(err){
			return res.status(500).send({
				status:500,
				error:true,
				message: "Category cannot be deleted"
			});
		}else{
			return res.status(200).send({
				status:200,
				error: false,
				message: "Category deleted successfully"
			});
		}
	})
}