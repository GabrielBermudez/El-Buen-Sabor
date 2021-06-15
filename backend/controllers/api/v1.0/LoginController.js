const User = require('../../../models/UserModel')
const mongoose = require('mongoose')
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


exports.user_login = function (req, res) {

    User.FindUserByEmail(req.body.email,function(err,user) {
        if(user){
            bcrypt.compare(`${req.body.password}-${user.created_at.getTime()}`, user.password, function(err, result) {
                if(result){
                    return res.status(200).send({
                        status:200,
                        error:false,
                        data: {user}
                    })

                }else{
                    return res.status(404).send({
                        status:404,
                        error:false,
                        message: "Incorrect password"
                    })
                }
            }) 
        }else{
            return res.status(404).send({
                status:404,
                error:false,
                message: "User not found"
            })
        }
    })
}

exports.user_logout = (req,res,next) => {
    req.session.user = null;
    res.redirect('/');
}


exports.reset_password = (req,res,next) =>{

    User.FindUserByEmail(req.body.email, (err, user)=>{
        if(err)
            return next(err)
        let token = jwt.sign({
            user
        }, `${user.password}-${user.created_at.getTime()}`, {expiresIn: '3600s'});

        let transporter = nodemailer.createTransport({
           service: 'gmail',
           auth: {
               user: 'sakuradevcode@gmail.com',
               pass: 'hbgoavrbflountwy'
           }
        })
        const host = req.headers.host;

        let mailOptions = {
           from: 'sakuradevcode@gmail.com',
           to: req.body.email,
           subject: 'Restablecer Contraseña',
           html: `<h4>Link</h4> <a href="http://${host}/login/change-password/id/${user._id}/token/${token}">Cambiar Contraseña</a>`
          
        }

        transporter.sendMail(mailOptions, function(error, info){
            if (error){
                console.log(error);
                
            } else {
                console.log("Email sent" + info.response);
                
            }
            res.redirect('/')
        });
    })
}


exports.action_change_password = (req, res, next) => {
    let {id,token} = req.params
    User.FindUserByID(id, (err, user) => {
        if(err)
            return next(err)

        let secret = `${user.password}-${user.created_at.getTime()}`

        jwt.verify(token, secret, (err, payload) => {
            if (err) {
                console.log('This token is not available')
                res.redirect('/')
            } else {
                res.render('login/change-password', {id:payload.user._id, token})
            }
        });

    })
}

exports.change_password = (req, res, next) => {
    let {id,token,password} = req.body
    const saltRounds = 10

    User.FindUserByID(req.body.id, (err, user) => {
        if(err)
            return next(err)

        let secret = `${user.password}-${user.created_at.getTime()}`

        jwt.verify(token, secret, (err, payload) => {
            if (err) {
                console.log('This token is not available')
                res.redirect('/')
            } else {
                bcrypt.hash(`${password}-${user.created_at.getTime()}`, saltRounds, function(err, hash) {
                    if (err) {
                        return next(err)
                    }
                    user.password = hash
                    User.UpdateUser(user)
                    console.log('The password has changed sucessfully')
                    res.redirect('/')
                })
            }  
        })  
    })
}