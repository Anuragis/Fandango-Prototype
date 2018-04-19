var bookingsModel = require('../models/bookingsModel');
var auto = require('mongodb-autoincrement');
const {ObjectId} = require('mongodb');


module.exports.createBooking = function(req,res,next){
    console.log("req body", req.body);
        var newBooking = new bookingsModel();
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

module.exports.deleteBooking = function(req,res,next){
    console.log("req body", req.params);
    // var newBooking = new bookingsModel();
    var bid =  req.params.bid;
    console.log(bid);
    // bookingsModel.findOne({bid}, function(err, booking) {
    //     //if(err) 
    //     //throw err;
    //     console.log(booking);
    // })
    bookingsModel.findOneAndUpdate({ bid : req.params.bid}, { $set : { status : 'cancel' } }, {new:true}, function(err, booking) {
        console.log("asd",bid);
        if (err)
            throw err;
        console.log("affected", booking);
    })
    // bookingsModel.findById(id, function (err, doc) {
    //     if (err) ..
    //     doc.name = 'jason bourne';
    //     doc.save(callback);
    //   });
}

