let Product = require('../../../models/ProductModel');
let mongoose = require('mongoose');

exports.create_product = (req,res) =>{

	let product = new Product({
		denominacion: req.body.denominacion,
		tiempo_estimado: req.body.tiempo_estimado,
		precios_id: 0,
		rubro_id: 0
	});

	Product.AddProduct(product, function(err){
		if(err){
			return res.status(500).send({
				status:500,
				error: true,
				message: err
			});
		}else{
			return res.status(200).send({
				status:200,
				error: false,
				message: "Product created succesfully"
			});
		}
	})
}

exports.update_product = (req,res) => {
	Product.FindProductByID(req.params.id,function(err,product){
		if(err){
			return res.status(500).send({
				status:500,
				error: true,
				message: err
			});
		}
		product.denominacion = req.body.denominacion;
		product.tiempo_estimado = req.body.tiempo_estimado;
		product.precios_id= 0;
		product.rubro_id= 0;

		Product.UpdateProduct(product._id,product,function(err){
			if(err){
				return res.status(500).send({
					status:500,
					error: true,
					message: err
				});
			}

			return res.status(200).send({
				status:200,
				error: false,
				message: "Product updated succesfully"
			});
		});
	})
}

exports.view_product = (req,res) => {
	Product.FindProductByID(req.params.id, function(err,product){
		if(err){
			return res.status(500).send({
				status:500,
				error: true,
				message: err
			});
		}

		return res.status(200).send({
			status:200,
			error: false,
			data: product
		});
	})
}

exports.all_products = (req,res) => {
	Product.FindProductAll(function(err,products){
		if(err){
			return res.status(500).send({
				status:500,
				error: true,
				message: err
			});
		}

		return res.status(200).send({
			status:200,
			error: false,
			data: products
		});
	})
}

exports.delete_product = (req,res) => {
	Product.RemoveProductByID(req.body.id,function(err){
		if(err){
			return res.status(500).send({
				status:500,
				error: true,
				message: err
			});
		}

		return res.status(200).send({
			status:200,
			error: false,
			message: "The product was deleted successfully"
		});
	})
}