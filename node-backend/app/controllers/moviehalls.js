var movieHallsModel = require('../models/moviehallsModel');
const {ObjectId} = require('mongodb');
var mongoose = require('../connections/mongo');


module.exports.createMovieHall = function(req,res,next){
    
   
    const seatArr=[];
    for(var i=0;i<169;i++){
        seatArr[i]=0;
    }

    var screenArr=[];
 
    

   for(var i=0;i<req.body.screens.length;i++)
   {
    var movieTimingsArr=[];
    for(var j=0;j<req.body.screens[i].movieTimings.length;j++)
    {
       var  movieTime={
                movieTime:req.body.screens[i].movieTimings[j].movieTime,
                seats:seatArr
        }
            movieTimingsArr.push(movieTime);
       }

       var screen={
            movieName: req.body.screens[i].movieName,
            movieTimings: movieTimingsArr,
            movieRating:req.body.screens[i].movieRating,
            movieLength:req.body.screens[i].movieLength,
            movieCategory:req.body.screens[i].movieCategory,
            price:req.body.screens[i].price
        }
        screenArr.push(screen);    
      
    }

    
//console.log("Screen ",screenArr[0], screenArr[1]);
 /**   console.log("Screen Array", screenArr);
    console.log("Screen Timings", screenArr[0].movieTimings[0]);
    console.log("Screen Seats", screenArr[0].movieTimings[0].movieTime[0]);*/


    var newMovieHall = new movieHallsModel();
    newMovieHall.hallName = req.body.hallName;
    newMovieHall.hallAddress = req.body.hallAddress;
    newMovieHall.hallCity = req.body.hallCity;
    newMovieHall.hallZipCode = req.body.hallZipCode;
    newMovieHall.hallState = req.body.hallState;
    newMovieHall.screens =screenArr;
    newMovieHall.status="active";
   // console.log("Halle", newMovieHall);
   newMovieHall.save(function(err,hall) {
        console.log("Error in movie hall Creation");
        if (err){
            throw err;
        }
        console.log("Movie Hall Created: ", hall);
        res.send();
    })
   

}
module.exports.getMovieHalls=function(req,res,next){
    console.log("Inside Movie Get all");
    movieHallsModel.find({}, function(err, halls) {

    if(err){
        console.log("Get movie error", err);
    }else{
        var movieHallMap = [];
        halls.map(hall=>{
            var ob = {};
        if(hall.status==="active"){
            ob = {_id:hall._id,
                hallName:hall.hallName,
                hallAddress:hall.hallAddress,
                hallCity: hall.hallCity,
                hallZipCode: hall.hallZipCode,
                hallState: hall.hallState,
                screens: hall.screens,
                status: hall.status
            };
            movieHallMap.push(ob);
            }
        });

        res.send(JSON.stringify(movieHallMap));  
        }
    })
}


module.exports.getMovieHallSeats = function(req,res,next){


   
  /**  movieHallsModel.find({
        '_id': { $in: [
            mongoose.Types.ObjectId(req.params.mid)
        ]}
    }, function(err, seats){
        if(err){
            console.log("Get movie id error", err);
        }else{
            console.log(seats);
            res.send(JSON.stringify(seats));  
            }
        // })*/
        // movieHallsModel.update({'screens.movieTimings.id': mongoose.Types.ObjectId("5adc21bd19398524589381af")}, {'$set': {
        //     'screens.$.name': 'updated item2',
        //     'items.$.value': 'two updated'
        // }}, function(err) { 

        // })
        // movieHallsModel.findOneAndUpdate({'screens.$.movieTimings.$._id': mongoose.Types.ObjectId("5adc21bd19398524589381af")}, { $set : { seats : [0,1] } }, {new:true}, function(err, movie) {
        //     // console.log("Movie id");
        //     if (err)
        //         throw err;
        //     console.log("Movie affected", movie);
        //     res.send("DONE");
        // })


    //  movieHallsModel.findOne({'screens.movieTimings._id': mongoose.Types.ObjectId("5adc21bd19398524589381af")}, function(err, seats) {

    //     if(err){
    //         console.log("Get movie id error", err);
    //     }else{
            
    //         res.send(JSON.stringify(seats));  
    //         }
    //     })

//     movieHallsModel.find()
//   .where('screens.movieTimings._id')
//   .in(["5adc21bd19398524589381af", "5adc21bd19398524589381ab"])
//   .exec(function (err, records) {
//     //make magic happen
//     console.log(records[0].movieTimings)
//     res.send(JSON.stringify(records));  
//   });

// movieHallsModel.findById('5adc21bd19398524589381a9', 'movieTimings', function (err, adventure) {

//     console.log(adventure)
//     res.send(JSON.stringify(adventure))
// });


// movieHallsModel.find({ 'screens.movieTimings._id': mongoose.Types.ObjectId('5adc21bd19398524589381af') },
// {"screens.movieTimings.$.seats": true},
//  function (err, adventure) {
//     console.log(adventure[0].screens[0])
//     res.send(JSON.stringify(adventure))
// });
movieHallsModel.findOne({'screens.movieTimings._id': mongoose.Types.ObjectId('5adc21bd19398524589381af')},{"screens.movieTimings.$": true}).exec(function (err, result) {
    console.log(result);

//  var movieTimings = result.screens.movieTimings._id('5adc21bd19398524589381af');
  //console.log(movieTimings);
  // if we didn't find the friend, something went wrong
    res.send(result);
});

// movieHallsModel.findOne()
//   .where('screens.movieTimings._id')
//   .in([mongoose.Types.ObjectId('5adc21bd19398524589381af')])
//   .select('screens.movieTimings')
//   .exec(function (err, records) {
//     //make magic happen
//     res.send(records);
//   });

/*
db.collection.aggregate([
    // Get only the documents where "email" equals "test@test.com" -- REPLACE with params.username
    {"$match" : {email : "test@test.com"}}, 
    // Unwind the "inventories" array
    {"$unwind" : "$inventories"}, 
    // Get only elements where "inventories.title" equals "activeInventory"
    {"$match" : {"inventories.title":"activeInventory"}}, 
    // Unwind the "vehicles" array
    {"$unwind" : "$inventories.vehicles"}, 
    // Filter by vehicle ID -- REPLACE with vehicleID 
    {"$match" : {"inventories.vehicles._id":ObjectId("53440e94c02b3cae81eb0069")}}, 
    // Tidy up the output
    {"$project" : {_id:0, vehicle:"$inventories.vehicles"}}
])
*/
//   movieHallsModel.
//   aggregate({ '$match' : {'_id':mongoose.Types.ObjectId("5adc21bd19398524589381af")}}).
//   exec(function(err,records){
//       console.log(records);
//     res.send(JSON.stringify(records))
//   });
}


module.exports.updateMovieHall=function(req,res,next){
    
    var hid =  req.params.hid;

    console.log("Screens",req.body.screens);
    movieHallsModel.findOneAndUpdate({ _id : req.params.hid}, { $set : { 
        hallName:req.body.hallName,
        hallAddress:req.body.hallAddress,
        hallCity:req.body.hallCity,
        hallZipCode: req.body.hallZipCode,
        hallState: req.body.hallState,
        screens: req.body.screens,
        status: req.body.status
    } }, {new:true}, function(err, hall) {
       
        if (err)
            throw err;
    
        res.end();
    })
}