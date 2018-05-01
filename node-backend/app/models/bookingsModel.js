var mongoose = require('mongoose')
    , Schema = mongoose.Schema
    , Mixed = Schema.Types.Mixed;

var autoIncrement = require("mongodb-autoincrement");   

var bookingSchema = new Schema({

//    bid: { type : Number, unique : true },
   bdate: { type :  String, required : true },
   bamount: { type : Number, required : true },
   btax: { type : Number, required : true },
   userid: { type : String, required : true },
   fname: { type : String, required : true },
   lname: { type : String },
   showtime: { type : String, required : true },
   moviename: { type : String, required : true },
   screenid: { type : String, required : true },
   hallname: { type : String, required : true },
   seatsbooked: { type : Array , default : [] , required : true },
   status: { type : String, required : true },
   hallcity: { type : String, required : true }
});


module.exports = mongoose.model('Bookings', bookingSchema);