

var movieHallsModel = require('../models/moviehallsModel');
const {ObjectId} = require('mongodb');
var mongoose = require('../connections/mongo');
var moviesModel = require('../models/moviesModel');

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
                screenID:req.body.screens[i].movieTimings[j].screenID,
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
        if (err){
            throw err;
        }
       
        res.send();
    })
   

}
module.exports.getMovieHalls=function(req,res,next){
    console.log("Inside Movie Get all");
    movieHallsModel.find({status:"active"}, function(err, halls) {

    if(err){
       // console.log("Get movie error", err);
    }else{
        res.send(JSON.stringify(halls));  
        }
    })
}

module.exports.updateMovieHall=function(req,res,next){
    console.log("put request", req.body);
    var hid =  req.params.hid;
    movieHallsModel.findById({_id: req.params.hid}, function(err, result){
        if (err)
            throw err;

        console.log(result);
        
        let seatArray = ['M9','M8','M7','M6','M5','M4','M3','M2','M1','L9','L8','L7','L6','L5','L4','L3','L2','L1','K9','K8','K7','K6','K5','K4','K3','K2','K1','J10','J9','J8','J7','J6','J5','J4','J3','J2','J1','I11','I10','I9','I8','I7','I6','I5','I4','I3','I2','I1','H13','H12','H11','H10','H9','H8','H7','H6','H5','H4','H3','H2','H1','G14','G13','G12','G11','G10','G9','G8','G7','G6','G5','G4','G3','G2','G1','F15','F14','F13','F12','F11','F10','F9','F8','F7','F6','F5','F4','F3','F2','F1','E16','E15','E14','E13','E12','E11','E10','E9','E8','E7','E6','E5','E4','E3','E2','E1','D14','D13','D12','D11','D10','D9','D8','D7','D6','D5','D4','D3','D2','D1','C17','C16','C15','C14','C13','C12','C11','C10','C9','C8','C7','C6','C5','C4','C3','C2','C1','B17','B16','B15','B14','B13','B12','B11','B10','B9','B8','B7','B6','B5','B4','B3','B2','B1','A15','A14','A13','A12','A11','A10','A9','A8','A7','A6','A5','A4','A3','A2','A1'];
        result.screens = result.screens.map((screen) => {
            let tempTimings = screen.movieTimings;
            if(screen.movieName==req.body.moviename) {
                tempTimings = screen.movieTimings.map((mTime) => {
                    mTime = JSON.parse(JSON.stringify(mTime));
                    if(mTime.screenID == req.body.screenID) {
                        req.body.seatsbooked.map((seat) => {
                            mTime.seats[seatArray.indexOf(seat)] = 1;
                        })
                    }
                    console.log("mTime.",mTime);
                    return mTime;
                })
            }
            for(var i=0; i<screen.movieTimings.length; i++) {
                screen.movieTimings[i].seats = tempTimings[i].seats;
            }
            return screen;
        })
        console.log("result",result.screens[0].movieTimings[0]);
        
        // res.send(result);
        movieHallsModel.findOneAndUpdate({ _id : result._id}, { $set : { 
            hallName:result.hallName,
            hallAddress:result.hallAddress,
            hallCity:result.hallCity,
            hallZipCode: result.hallZipCode,
            hallState: result.hallState,
            screens: result.screens,
            status: result.status
        } }, {new:true}, function(err, hall) {
           
            if (err)
                throw err;
                
            console.log("updated hall", hall);
        
            res.end();
        })
   })
    
}

module.exports.getHallByMovieName=function(req,res,next){
    console.log("req body", req.params);
    moviesModel.findById({_id : req.params.moviename},function(err,movie){
        if(err){

        }else{
            var resHall=[];
            movieHallsModel.find({}, function(err, halls) {
                if (err)
                    throw err;

                    halls.map(function(hall){ 
                        return hall.screens.filter(function(screen){ 
                                if(screen.movieName===movie.movieTitle){
                                resHall.push(hall);
                                }
                            });
                    });
                console.log("Response : ", resHall);
                res.send(resHall);
            })
        }
    });
    
}

module.exports.getHallById=function(req,res,next){
    
    movieHallsModel.find({_id:req.params.hid}, function(err, hall) {

    if(err){
       // console.log("Get movie error", err);
    }else{
        res.send(JSON.stringify(hall));  
        }
    });
}