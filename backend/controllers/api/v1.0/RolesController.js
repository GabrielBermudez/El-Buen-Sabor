let Roles = require('../../../models/RolesModel');
let mongoose = require('mongoose');

exports.create_rol = (req,res) =>{
	let rol = new Roles({
		denominacion: req.body.denominacion,
	});
	Roles.AddRol(rol, function(err){
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
				message: "Rol created succesfully"
			});

		}
	})
}

exports.update_rol = (req,res) => {
	Roles.FindRolByID(req.params.id,function(err,rol){
		if(err){
			return res.status(500).send({
				status:500,
				error: true,
				message: err
			});
		}
		rol.denominacion = req.body.denominacion;
		Roles.UpdateRol(rol._id,rol,function(err){
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
				message: "Rol updated succesfully"
			});
		});
	})
}

exports.view_rol = (req,res) => {
	Roles.FindRolByID(req.params.id, function(err,rol){
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
			data: rol
		});
	})
}

exports.all_rol = (req,res) => {
	Roles.FindRolAll(function(err,roles){
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
			data: roles
		});
	})
}

exports.delete_rol = (req,res) => {
	Roles.RemoveRolByID(req.body.id,function(err){
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
			message: "The rol was deleted successfully"
		});
	})
}