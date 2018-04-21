var usersModel = require('../models/usersModel');
const {ObjectId} = require('mongodb');


module.exports.createBooking = function(req,res,next){
    console.log("req body", req.body);
        var newUser = new bookingsModel();
        // newBooking.bid = 0;
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
        // console.log("here");
        newBooking.save(function(err,booking) {
            console.log("here");
            if (err){
                throw err;
            }
            console.log("booking: ", booking);
        })
}