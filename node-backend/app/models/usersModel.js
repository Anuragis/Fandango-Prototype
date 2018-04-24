//schema
var mongoose = require('../connections/mongo');
const Schema = mongoose.Schema;

var connection = mongoose.createConnection('mongodb://cmpeuser:cmpepass@ds247569.mlab.com:47569/fandango_system');



    var usersSchema = new Schema({
       password: { type : String, required : true },
       fName: { type :  String, required : true },
       lName: { type : String, required : true },
       email: { type : String, required : true },
       address: { type : String, required : true },
       city: { type : String, required : true },
       state: { type : String, required : true },
       zipCode: { type : String, required : true },
       phoneNumber: { type : String, required : true },
       profileImage: { type : String, required : true },
       creditCard:{
           cardNumber:{type:String,required:true},
           nameOnCard: {type:String,required:true},
           expiry:{type:String,required:true},
           cvv:{type:String,required:true}
       },
       userType: { type : String, required : true }
    });

    
module.exports = mongoose.model('users', usersSchema);
