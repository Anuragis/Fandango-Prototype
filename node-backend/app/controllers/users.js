var usersModel = require('../models/usersModel');
var multer = require('multer');
var path = require('path');
const {ObjectId} = require('mongodb');

const storage = multer.diskStorage({
        destination: 'public/data/userImages',
        filename: function (req, file, cb) {
           console.log("req inside" + req.params.uid); 
           cb(null, req.params.uid + path.extname(file.originalname))
        }
    });
    // create the multer instance that will be used to upload/save the file
    const upload = multer({ storage }).single('iFile');
module.exports.sImg = multer({ storage }).single('iFile');

module.exports.createUser = function(req,res,next){
   
        var newUser = new usersModel();

        newUser.fName = req.body.fName;
        newUser.lName = req.body.lName;
        newUser.email = req.body.email;
        newUser.address = req.body.address;
        newUser.city = req.body.city;
        newUser.state = req.body.state;
        newUser.zipCode = req.body.zipCode;
        newUser.phoneNumber = req.body.phoneNumber;
        newUser.profileImage = "preview.jpg";
        newUser.creditCard = req.body.creditCard;
        newUser.userType="user";
        newUser.status="active";

        newUser.save(function(err,movie) {
            console.log("Error in user Creation");
            if (err){
                throw err;
            }
           
            res.send();
        })


}

module.exports.deleteUser = function(req,res,next){
    console.log("req body for delete a movie", req.params);
    let uid =  req.params.uid;
    console.log("UserId in Delete:" ,uid);

    usersModel.findOneAndUpdate({ _id : req.params.uid}, { $set : { status : 'cancel' } }, {new:true}, function(err, movie) {
        if (err)
            throw err;
       res.send();
    })
}

module.exports.getAllUsers = function(req,res,next){
    usersModel.find({}, function(err, users) {

    if(err){
        console.log("Get movie error", err);
    }else{
        var userMap = [];
        users.map(user=>{
            var ob = {};
        if(user.status==="active"){
            ob = {_id:user._id,
                fName:user.fName,
                lName:user.lName,
                email: user.email,
                address: user.address,
                city: user.city,
                state: user.state,
                zipCode: user.zipCode,
                phoneNumber: user.phoneNumber,
                profileImage: user.profileImage,
                creditCard:user.creditCard,
                userType:user.userType,
                status:user.status
            };
                 userMap.push(ob);
            }
        });

        res.send(JSON.stringify(userMap));  
        }
    })
}

module.exports.getUserById=function(req,res,next){
   console.log("Inside Get user by id");
    usersModel.findOne({_id:req.params.uid}, function(err, user) {

    if(err){
        console.log("Get user id error", err);
    }else{
        res.send(JSON.stringify(user));  
        }
    })

}


module.exports.updateUser=function(req,res,next){
   
    var uid =  req.params.uid;
    console.log("Inside update user");
    if(req.file) {
        var values = {$set : {
            profileImage : req.params.uid + path.extname(req.file.originalname)}};
        usersModel.findOneAndUpdate({ _id : req.params.uid},values, function(err, user) {
            console.log("Movie id",uid);
            if (err)
                throw err;
            res.end();
        })
    } else {
    usersModel.findOneAndUpdate({ _id : req.params.uid}, { $set : { 
        fName : req.body.fName,
        lName : req.body.lName,
        email : req.body.email,
        address : req.body.address,
        city : req.body.city,
        state : req.body.state,
        zipCode : req.body.zipCode,
        phoneNumber : req.body.phoneNumber,
        creditCard : req.body.creditCard,
        userType:req.body.userType,
        status:"active"
    } }, {new:true}, function(err, user) {
        console.log("Movie id",uid);
        if (err)
            throw err;
        res.end();
        })
    }
    
}







