var logsModel = require('../models/logsModel');
const {ObjectId} = require('mongodb');

module.exports.createLog = function(req,res,next){
    console.log("req body", req.body);
        var newLog = new logsModel();

        newLog.page = req.body.page;
        newLog.time = req.body.time;
        newLog.pageclick = req.body.pageclick;
        newLog.movie = req.body.movie;
        newLog.movieclick = req.body.movieclick;
        newLog.fname = req.body.fname;
        newLog.lname = req.body.lname;
        newLog.state = req.body.state;
        newLog.city = req.body.city;
        newLog.hall = req.body.hall;
        newLog.hallbooking=req.body.hallbooking;
        newLog.moviebooking=req.body.moviebooking;
        newLog.bookingdate=req.body.bookingdate;
        newLog.hallticketcount=req.body.hallticketcount;
        newLog.movierating=req.body.movierating;

        newLog.save(function(err,log) {
            console.log("Error in movie Creation");
            if (err){
                throw err;
            }
           
            res.send();
        })


}

module.exports.getLogs = function(req,res,next){
    console.log("req body", req.params);
    logsModel.find({}, function(err, logs) {
        if (err)
            throw err;
       // console.log("affected movies", logs);
        
       // var date="09-08-2017";
      //  console.log("Year=>",date.split("-")[2]);
        //console.log(resp[2]);

/** */
        var myMap = new Map();
        logs.map(function(log){ 
        if(log.movie!=="" && log.bookingdate.split("-")[2]==="2017"){
            if(myMap.has(log.movie)){
                myMap.set(log.movie, myMap.get(log.movie)+log.moviebooking);
            }else{
                myMap.set(log.movie,log.moviebooking);
            }
        }
        });

        console.log("MAP:",myMap);
        
        
        var array = [];
        let keys = Array.from(myMap.keys());
        keys.map(function(key){
        array.push({
            name: key,
            value: myMap.get(key)
            });
        });

        console.log("ARRAY:",array);

        var sorted = array.sort(function(a, b) {
        return (a.value < b.value) ? 1 : ((b.value < a.value) ? -1 : 0)
        });
        console.log("SORTED:",sorted.slice(0,10)); 

/** */



        res.send(logs);
    });




    
}


