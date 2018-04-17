var mongoose = require('mongoose')
    , Schema = mongoose.Schema
    , Mixed = Schema.Types.Mixed;

var autoIncrement = require("mongodb-autoincrement");   

var bookingSchema = new Schema({

   bid: { type : Number, unique : true },
   bdate: { type : String, required : true },
   bamount: { type : Number, required : true },
   btax: { type : Number, required : true },
   userid: { type : Number, required : true },
   mid: { type : Number, required : true },
   hid: { type : Number, required : true },
   screenid: { type : Number, required : true },
   showtime: { type : String, required : true },
   seats: { type: Mixed, default: [], required : true },
   status: { type : String, required : true }
});

// bookingSchema.plugin(autoIncrement.mongoosePlugin, {
//     field: bookingSchema.bid,               // auto increment field name, default: _id 
//     step: 1                   // auto increment step 
// });

module.exports = mongoose.model('bookings', bookingSchema);