//schema
var mongoose = require('../connections/mongo');
const Schema = mongoose.Schema;

var connection = mongoose.createConnection('mongodb://cmpeuser:cmpepass@ds247569.mlab.com:47569/fandango_system');



    var usersSchema = new Schema({
       password: { type : String, required : true },
       fName: { type :  String, required : true },
       lName: { type : String, required : false },
       email: { type : String, required : true },
       address: { type : String, required : false },
       city: { type : String, required : false },
       state: { type : String, required : false },
       zipCode: { type : String, required : false },
       phoneNumber: { type : String, required : false},
       profileImage: { type : String, required : false },
       creditCard:{
           cardNumber:{type:String,required:false},
           nameOnCard: {type:String,required:false},
           expiry:{type:String,required:false},
           cvv:{type:String,required:false}
       },
       userType: { type : String, required : true },
       status:{type:String, required:true}
    });

    
module.exports = mongoose.model('users', usersSchema);
