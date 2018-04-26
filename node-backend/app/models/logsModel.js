var mongoose = require('../connections/mongo');
const Schema = mongoose.Schema;

var connection = mongoose.createConnection('mongodb://cmpeuser:cmpepass@ds247569.mlab.com:47569/fandango_system');

var logsSchema = new Schema({
    page: { type : String},
    time: { type :  Number, default:0},
    pageclick: { type : Number, default:0},
    movie: { type : String},
    movieclick: { type : Number,default:0},
    movierating:{type:Number,default:0},
    fname: { type : String},
    lname: { type : String},
    state: { type : String},
    city: { type : String},
    hall:{type:String},
    hallticketcount:{type:Number},
    hallbooking:{type:Number, default:0},
    moviebooking:{type:Number,default:0},
    bookingdate:{type:String}
 });


module.exports = mongoose.model('logs', logsSchema);