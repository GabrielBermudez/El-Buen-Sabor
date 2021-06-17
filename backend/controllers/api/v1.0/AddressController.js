let Address = require('../../../models/AddressModel');
let mongoose = require('mongoose');

exports.CreateAddress = (req,res) =>{
	let date = new Date();
	let address = new Address({
		street: req.body.street,
		street_no: req.body.street_no,
		city: req.body.city,
		created_at: date,
		updated_at: date
	});
	Address.Create(address, function(err){
		if(err){
			return res.status(500).send({
				status:500,
				error:true,
				message: err
			});
		}else{
			return res.status(200).send({
				status:200,
				error:false,
				message: "Address created successfully"
			})
		}
	})
}

exports.AddressDetails = (req,res) =>{
	Address.FindAddressByID(req.params.id, function(err, address){
		if(err){
			return res.status(500).send({
				status:500,
				error:true,
				message: err
			});
		}else{
			if(!address){
				return res.status(404).send({
					status:404,
					error:true,
					message: "Address not found"
				});
			}else{
				return res.status(200).send({
					status:200,
					error:false,
					data: {address}
				});
			}
		}
	})
}

exports.ShowAllAdresses = (req,res) =>{
	Address.FindAllAdresses(function(err, addresses_list){
		if(err){
			return res.status(500).send({
				status:500,
				error:true,
				message: err
			});
		}else{
			return res.status(200).send({
				status:200,
				error:false,
				data: {addresses_list}
			});
		}
	})
}

exports.AddressUpdate = (req,res) =>{
	let date = new Date();
	Address.UpdateAddress({_id:req.params.id},{
		$set:{
			street: req.body.street,
			street_no: req.body.street_no,
			city: req.body.city,
			updated_at: date,
		}
	}, function(error, info){
		if(error){
			return res.status(500).send({
				status:500,
				error:true,
				message: "Update cannot be done"
			});
		}else{
			return res.status(200).send({
				status:200,
				error: false,
				message: "Successful update"
			});
		}
	})
}

exports.DeleteAddress = (req,res) =>{
	Address.Delete({_id:req.params.id}, function(err){
		if(err){
			return res.status(500).send({
				status:500,
				error:true,
				message: "Cannot delete the register"
			});
		}else{
			return res.status(200).send({
				status:200,
				error:false,
				message: "Register deleted successfully"
			});
		}
	})
}



