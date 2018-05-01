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

        console.log("Inside Signup");
        let type= req.body.userType;
        type=type||"user";

        if(user){
            console.log('email already exist');
            res.send(400);
        } else {
                newUser.fName = req.body.fName;
                newUser.lName = req.body.lName;
                newUser.email = req.body.email;
                newUser.address = req.body.address||"";
                newUser.city = req.body.city||"";
                newUser.state = req.body.state||"";
                newUser.zipCode = req.body.zipCode||"";
                newUser.phoneNumber = req.body.phoneNumber||"";
                newUser.profileImage = req.body.profileImage||"preview.jpg";
                newUser.creditCard = {
                  cardNumber:req.body.cardnumber||"",
                  nameOnCard:req.body.nameoncard||"",
                  expiry:req.body.expiry||"",
                  cvv:req.body.cvv||""
                }
                newUser.userType=type;
                newUser.status="active";

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

