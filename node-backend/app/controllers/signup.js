var usersModel = require('../models/usersModel');
var passport = require('passport');
var bcrypt = require('bcrypt');
const {ObjectId} = require('mongodb');

module.exports.signUp = function(req,res,next){

    // console.log("Inside SignUp Recieved, signup body",  req.body);
    console.log(req.body.password);
    console.log(req.body.passwordTwo);
    var newUser = new usersModel();
    
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

