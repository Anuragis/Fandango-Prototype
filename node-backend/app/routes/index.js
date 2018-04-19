var express = require('express');
var router = express.Router();

var admin = require('../controllers/admin.js');
var bookings = require('../controllers/bookings.js');
var moviehalls = require('../controllers/moviehalls.js');
var movies = require('../controllers/movies.js');
var users = require('../controllers/users.js');

router
    .route('/booking')
    .post(bookings.createBooking);

router
    .route('/booking/:bid')
    .delete(bookings.deleteBooking);    
    
module.exports = router;