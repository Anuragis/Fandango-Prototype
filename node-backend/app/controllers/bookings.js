var bookingsModel = require('../models/bookingsModel');
const {ObjectId} = require('mongodb');


module.exports.createBooking = function(req,res,next){
    console.log("req body", req.body);
        var newBooking = new bookingsModel();
        newBooking.bdate = req.body.bdate;
        newBooking.bamount = req.body.bamount;
        newBooking.btax = req.body.btax;
        newBooking.userid = req.body.userid;
        newBooking.fname = req.body.fname;
        newBooking.lname = req.body.lname;
        newBooking.showtime = req.body.showtime;
        newBooking.moviename = req.body.moviename;
        newBooking.screenid = req.body.screenid; 
        newBooking.hallname = req.body.hallname;
        newBooking.seatsbooked = req.body.seatsbooked;
        newBooking.status = req.body.status;
        newBooking.hallcity = req.body.hallcity;
        newBooking.save(function(err,booking) {
            console.log("here");
            if (err){
                throw err;
            }
            console.log("booking: ", booking);
            res.send(booking);
        })
}

module.exports.deleteBooking = function(req,res,next){
    console.log("req body", req.params);
    var bid =  req.params.bid;
    bookingsModel.findByIdAndUpdate({ _id : req.params._id}, { $set : { status : 'cancel' } }, {new:true}, function(err, booking) {
        console.log("asd",bid);
        if (err)
            throw err;
        console.log("affected", booking);
        res.send(booking);
    })
    
}

module.exports.findBookingsByUserid = function(req,res,next){
    console.log("req body", req.params);
    var bid =  req.params.bid;
    bookingsModel.find({ userid : req.params.userid}, function(err, booking) {
        if (err)
            throw err;
        console.log("affected users", booking);
        res.send(booking);
    })
    
}

module.exports.findBookingsByMoviename = function(req,res,next){
    console.log("req body", req.params);
    bookingsModel.find({ moviename : req.params.moviename}, function(err, booking) {
        if (err)
            throw err;
        console.log("affected movies", booking);
        res.send(booking);
    })
    
}

module.exports.findBookingsByHallname = function(req,res,next){
    console.log("req body", req.params);
    bookingsModel.find({ hallname : req.params.hallname}, function(err, booking) {
        if (err)
            throw err;
        console.log("affected halls", booking);
        res.send(booking);
    })
    
}