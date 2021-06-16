let User = require('../../../models/UserModel')
let mongoose = require('mongoose')
const bcrypt = require('bcrypt');

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
                user: req.body.user,
                password: hash,
                telephone: req.body.telephone,
                mobile: req.body.mobile,
                url_image: req.body.url_image,
                condition: req.body.condition,
                rol_id: 0, //MODIFICAR AL ID CORRESPONDIENTE DEL ROL "USUARIO COMUN"
                address_id: req.body.address_id,
                created_at: date,
                updated_at: date,
            }
        )
    	User.AddUser(user,function (err) {
            if (err) {
                return res.status(500).send({
                    status:500,
                    error:true,
                    message: "Couldn't Create User"
                })
            }
            return res.status(200).send({
                status:200,
                error:false,
                message: "User Created Successfully"
            })
            
        })
    })
}
