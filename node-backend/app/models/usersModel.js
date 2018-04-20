//schema

var mongoose = require('mongoose')
    , Schema = mongoose.Schema;


    var autoIncrement = require("mongodb-autoincrement");   

    var userSchema = new Schema({
       userId: { type : Number, unique : true },
       fName: { type :  String, required : true },
       lName: { type : String, required : true },
       address: { type : String, required : true },
       city: { type : String, required : true },
       state: { type : String, required : true },
       zipCode: { type : String, required : true },
       phoneNumber: { type : String, required : true },
       email: { type : String, required : true },
       profileImage: { type : String, required : true },
       type: { type : String, required : true }
    });