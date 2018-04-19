var mongoose = require('../connections/mongo');
const Schema = mongoose.Schema;
const Mixed = Schema.Types.Mixed;

var autoIncrement = require("mongoose-auto-increment"); 
var connection = mongoose.createConnection('mongodb://cmpeuser:cmpepass@ds247569.mlab.com:47569/fandango_system');

autoIncrement.initialize(connection);

var bookingSchema = new Schema({

   bid: { type : Number, required : true },
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

bookingSchema.plugin(autoIncrement.plugin, { model: 'bookings', field: 'bid', startAt: 1, });
module.exports = mongoose.model('bookings', bookingSchema);