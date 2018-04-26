var bcrypt = require('bcrypt');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/usersModel');

passport.use(new LocalStrategy( function(username, password, done) {

    console.log('passport local start\nemail: '+ username + ' pass: ' + password);
    User.findOne({
      email:username
    }).then(user => {
      if(!user){
        return done("no_user", false, {message: 'No User Found'});
      }
      // Match password
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if(err) throw err;
        if(isMatch){
          return done("found", user);
        } else {
          return done("pass_wrong", false, {message: 'Password Incorrect'});
        }
      })
    });
}));

module.exports.signIn = function(req,res,next){
  Object.keys(req.body).forEach(function(key){
    req.body = JSON.parse(key);
});  
  console.log("req body", req.body);
    console.log('signIN ROUTE');
    var username = req.body.username;
    var password = req.body.password;
    var resData;
    console.log("u", username);
    console.log("p", password);
    passport.authenticate('local',function(err,result){
        console.log("pass auth");
        if(err){
          console.log("ERR");
            resData = err;
            res.writeHead(400,{
                'Content-Type' : 'text/plain'
            });
            res.end(JSON.stringify(resData));
        }


        if(result){
          console.log("RES" + result);
            req.session.userId = result.userId;
            res.cookie('cookie',req.session.userId,{maxAge: 900000, httpOnly: false});
            res.writeHead(200,{
                'Content-Type' : 'text/plain'
            })
            console.log("Response ENds : ", result.userId);
            res.end(JSON.stringify(result.userId));
        }
    })(req,res,next);
};
