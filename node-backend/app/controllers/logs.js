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
        res.send(logs);
    });    
}



