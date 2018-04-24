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
        let type= req.body.type;
        type=type||"user";

        if(user){
            console.log('email already exist');
            res.send();
        } else {
                newUser.fName           = req.body.fName;
                newUser.lName           = null;
                newUser.address         = null;
                newUser.city            = null;
                newUser.state           = null;
                newUser.zipCode         = null;
                newUser.phoneNumber     = null;
                newUser.email           = req.body.email;
                newUser.profileImage    = null;
                newUser.creditCard      = null;
                newUser.userType        = type;
                newUser.status          ="active";

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

