var mongodb = require('../connections/mongo.js');
var bookingsModel = require('../models/bookingsModel');
var auto = require('mongodb-autoincrement');


module.exports.createBooking = function(req,res,next){
    console.log("req body", req.body);
    mongodb.connect(function(err,db){
        var newBooking = new bookingsModel();
        newBooking.bid = 0;
        newBooking.bdate = req.body.bdate;
        newBooking.bamount = req.body.bamount;
        newBooking.btax = req.body.btax;
        newBooking.userid = req.body.userid;
        newBooking.mid = req.body.mid;
        newBooking.hid = req.body.hid;
        newBooking.screenid = req.body.screenid; 
        newBooking.showtime = req.body.showtime;
        newBooking.seats = req.body.seats;
        newBooking.status = req.body.status;
        //save booking
        newBooking.save(function(err,booking) {
            if (err){
                throw err;
            }
            console.log("bookin: ", booking);
        })
        })
}