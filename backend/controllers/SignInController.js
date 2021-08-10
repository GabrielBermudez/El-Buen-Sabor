let passport = require('passport')
let User = require('../models/UserModel')
let mongoose = require('mongoose')
const bcrypt = require('bcrypt');

exports.authenticate_user_success = (req,res,next) => {
	res.redirect('/sign-in/verify-user')
}

exports.verify_user = (req,res,next) => {
	let date = new Date();
	const saltRounds = 10;
	req.session.user = req.session.passport.user

	User.FindUserByEmail(req.session.user.emails[0].value, (err,user) =>{
		if(!user){
			bcrypt.hash(`${req.session.user.id}-${date.getTime()}`, saltRounds, function(err, hash) {
				if (err) {
		            return next(err);
		        }
				let user = new User({	
		            name: req.session.user.name.givenName,
		            lastname: req.session.user.name.familyName,
		            dni: '',
		            age: '',
		            email: req.session.user.emails[0].value,
		            password: hash,
		            telephone: '',
		            mobile: '',
		            url_image: req.session.user.photos[0].value,
		            condition: true,
		            rol_id: '',
		            address_id: '',
		            created_at: date,
		            updated_at: date
		        })

				User.AddUser(user,function (err) {
			        if (err) {
			            return next(err);
			        }
			        console.log('User Created successfully');
			        req.session.user = user
			        res.redirect('/');
			    })
		    })
		}else{
			req.session.user = user
			res.redirect('/login/index')
		}
	})
}
