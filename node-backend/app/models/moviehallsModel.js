var mongoose = require('../connections/mongo');
const Schema = mongoose.Schema;
var connection = mongoose.createConnection('mongodb://cmpeuser:cmpepass@ds247569.mlab.com:47569/fandango_system');
       
    var movieTimingSchema=new Schema({
        screenID : {type:Number},
        movieTime:{type:String},
        seats:[],
        movieDate:{type: String}
    });

    var screensSchema=new Schema({
        movieName : {type:String},
        movieTimings:[movieTimingSchema],
        movieRating:{type:String},
        moviePhoto: { type : String},
        movieLength:{type:String},
        movieCategory: { type :  String},
        avgReviewRating : {type : Number}
    });

    var moviehallsSchema = new Schema({
        hallName: { type : String, required : true },
        hallAddress: { type :  String, required : true },
        hallCity: { type : String, required : true },
        hallZipCode: { type : String, required : true },
        hallState: { type : String, required : true },
        hallPrice: { type : Number, required : true },
        screens: [screensSchema],
        status:{type: String}
    });
    
module.exports = mongoose.model('moviehalls', moviehallsSchema);
