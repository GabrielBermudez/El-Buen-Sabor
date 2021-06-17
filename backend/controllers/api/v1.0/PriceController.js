let Price = require('../../../models/PriceModel');
let mongoose = require('mongoose');

exports.create_price = (req,res) =>{

	let date = new Date();

	let price = new Price({
		monto: req.body.monto,
		fecha_creacion: date,
		fecha_actualizacion: date
	});

	Price.AddPrice(price, function(err){
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
				message: "Price created succesfully"
			});
		}
	})
}

exports.update_price = (req,res) => {
	Price.FindPriceByID(req.params.id,function(err,price){
		let date = new Date();
		if(err){
			return res.status(500).send({
				status:500,
				error: true,
				message: err
			});
		}
		price.monto = req.body.monto;
		price.fecha_actualizacion = date;

		Price.UpdatePrice(price._id,price,function(err){
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
				message: "Price updated succesfully"
			});
		});
	})
}

exports.view_price = (req,res) => {
	Price.FindPriceByID(req.params.id, function(err,price){
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
			data: price
		});
	})
}

exports.all_prices = (req,res) => {
	Price.FindPricesAll(function(err,prices){
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
			data: prices
		});
	})
}

exports.delete_price = (req,res) => {
	Price.RemovePriceByID(req.body.id,function(err){
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
			message: "The price was deleted successfully"
		});
	})
}