let User = require('../models/UserModel')
let mongoose = require('mongoose')
const bcrypt = require('bcrypt');

exports.action_register_create = (req, res, next) => {
	res.render('register/create')
}

exports.register_create = (req, res, next) => {
    const saltRounds = 10;
	let date = new Date();
    bcrypt.hash(`${req.body.password}-${date.getTime()}`, saltRounds, function(err, hash) {
        if (err) {
            return next(err)
        }
    	let user = new User(
            {	
                name: req.body.name,
                lastname: req.body.lastname,
                dni: req.body.dni,
                age: req.body.age,
                email: req.body.email,
                user: null,
                password: hash,
                telephone: null,
                mobile: null,
                url_imagen: null,
                condition: true,
                rol_id: null,
                address_id: null,
                created_at: date,
                updated_at: date,
            }
        )
    	User.AddUser(user,function (err) {
            if (err) {
                return next(err)
            }
            console.log('User Created successfully')
            res.redirect('/')
            
        })
    })
}
