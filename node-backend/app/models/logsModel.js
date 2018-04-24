var mongoose = require('../connections/mongo');
const Schema = mongoose.Schema;

var connection = mongoose.createConnection('mongodb://cmpeuser:cmpepass@ds247569.mlab.com:47569/fandango_system');

var logsSchema = new Schema({
    page: { type : String},
    time: { type :  String},
    pageclick: { type : String},
    movie: { type : String},
    movieclick: { type : String},
    fname: { type : String},
    lname: { type : String},
    state: { type : String},
    city: { type : String}
 });

 
module.exports = mongoose.model('logs', logsSchema);