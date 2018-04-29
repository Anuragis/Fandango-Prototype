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
        return done(null,"Cannot connect to db");
      }
      // Match password
      bcrypt.compare(password, user.password, (err, isMatch) => {
        
        if(err) return done(null, 'Password does not match');;
        if(isMatch){
          console.log('Is a Match', isMatch);
          return done(null, user);
        } else {
          return done(null, null);
        }
      })
    });
}));

module.exports.signIn = function(req,res,next){
  Object.keys(req.body).forEach(function(key){
    req.body = JSON.parse(key);
  });
  var username = req.body.username;
  var password = req.body.password;
  var resData;
  passport.authenticate('local',function(err,result){
    console.log('result', result);
    console.log('error ', err);
      if(result.length === 0){
          console.log('negative response');
          resData = null;
          res.writeHead(400,{
              'Content-Type' : 'text/plain'
          });
          res.end(JSON.stringify(resData));
      }

      if(result) {
          console.log('result', result);
          // req.session.userID = result.userID;
          // res.cookie('cookie',req.session.userID,{maxAge: 900000, httpOnly: false});
          res.writeHead(200,{
              'Content-Type' : 'text/plain'
          })    
          resData = {};
          resData['_id'] = result._id;
          resData['fName'] = result.fName;
          resData['lName'] = result.lName;
          resData['userType'] = result.userType;
          console.log("Response ENds : ", resData);
          res.end(JSON.stringify(resData));
      }else{
        resData = null;
        res.writeHead(400,{
            'Content-Type' : 'text/plain'
        });
        res.end(JSON.stringify(resData));
      }
  })(req,res,next);
};
