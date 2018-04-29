var mongoose = require('../connections/mongo');
const Schema = mongoose.Schema;
var connection = mongoose.createConnection('mongodb://cmpeuser:cmpepass@ds247569.mlab.com:47569/fandango_system');

       var moviesSchema = new Schema({
       movieTitle: { type : String, required : true },
       movieCategory: { type :  String, required : true },
       trailerLink: { type : String, required : true },
       movieDescription: { type : String, required : true },
       cast: [
           {
               castName:{type:String}
           }
        ],
       movieLength: { type : String},
       releaseDate: { type : String},
       movieRating: { type : String},
       moviePhoto: { type : String},
       screen: { type : String},
       reviews:[
           {
               userID: {type: String},
               reviewText:{type: String},
               star:{type: String},
               fName: {type:String},
               lName:{type: String}
           }
       ],
       status:{type: String}

    });

module.exports = mongoose.model('movies', moviesSchema);