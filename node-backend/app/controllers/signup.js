var usersModel = require('../models/usersModel');
var passport = require('passport');
var bcrypt = require('bcrypt');
const {ObjectId} = require('mongodb');

module.exports.signUp = function(req,res,next){

    console.log("Inside SignUp Recieved, signup body",  req.body);
    var newUser = new usersModel();
    if(req.body.password != req.body.password2){
        console.log('Passwords do not match');
    }

    if(req.body.password.length < 4){
        console.log('Password must be at least 4 characters');
    }
    usersModel.findOne({email: req.body.email},function(err, user) {
        if(user){
            console.log('email already exist');
            res.send();
        } else {
                newUser.userId          = req.body.username,
                newUser.fName           = req.body.fName,
                newUser.lName           = req.body.lName,
                newUser.address         = req.body.address,
                newUser.city            = req.body.city,
                newUser.state           = req.body.state,
                newUser.zipCode         = req.body.zipCode,
                newUser.phoneNumber     = req.body.phoneNumber,
                newUser.email           = req.body.email,
                newUser.profileImage    = req.body.profileImage,
                newUser.type            = req.body.type,

                bcrypt.genSalt(10, (err, salt) => {
                  bcrypt.hash(req.body.password, salt, (err, hash) => {
                    if(err) throw err;
                    newUser.password = hash;
                    newUser.save()
                      .then(user => {
                        console.log('User added');
                        res.send();
                      })
                      .catch(err => {
                        console.log(err);
                        return;
                      });
                  });
                });
            }
    });
}

