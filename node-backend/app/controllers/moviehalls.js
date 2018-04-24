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

module.exports.getHallByMovieName=function(req,res,next){
    console.log("req body", req.params);

    var resHall=[];
    movieHallsModel.find({}, function(err, halls) {
        if (err)
            throw err;

            halls.map(function(hall){ 
                console.log("One hall object",hall);
                return hall.screens.filter(function(screen){ 
                        if(screen.movieName===req.params.moviename){
                           resHall.push(hall);
                        }
                    });
            });
        res.send(resHall);
    })
}