var mongoose = require('../connections/mongo');
const Schema = mongoose.Schema;
var connection = mongoose.createConnection('mongodb://cmpeuser:cmpepass@ds247569.mlab.com:47569/fandango_system');
       

       var moviehallsSchema = new Schema({
       hallName: { type : String, required : true },
       hallAddress: { type :  String, required : true },
       hallCity: { type : String, required : true },
       hallZipCode: { type : String, required : true },
       hallState: { type : String, required : true },
       screens:[{
                movieName : {type:String},
                movieTimings:[
                    {
                        movieTime:{type:String},
                        seats:[]
                    }
                ],
                movieRating:{type:String},
                movieLength:{type:String},
                movieCategory: { type :  String},
                price:{type: Number},

            }
       ],
       status:{type: String}

    });
module.exports = mongoose.model('moviehalls', moviehallsSchema);

