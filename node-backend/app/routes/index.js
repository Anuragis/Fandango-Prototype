var express = require('express');
var router = express.Router();

var admin = require('../controllers/admin.js');
var bookings = require('../controllers/bookings.js');
var moviehalls = require('../controllers/moviehalls.js');
var movies = require('../controllers/movies.js');
var users = require('../controllers/users.js');
var signin = require('../controllers/signin.js');
var signup = require('../controllers/signup.js');
var logout = require('../controllers/logout.js');

router
    .route('/booking')
    .post(bookings.createBooking);

router
    .route('/booking/:bid')
    .delete(bookings.deleteBooking);

router
    .route('/signup')
    .post(signup.signUp);

router
    .route('/signin')
    .post(signin.signIn);


router
    .route('/movie')
    .post(movies.createMovie);

router
    .route('/movie/:mid')
    .delete(movies.deleteMovie);

router
    .route('/movies')
    .get(movies.getAllMovies);

router
    .route('/movieByCategory/:category')
    .get(movies.getMovieByCategory);

router
    .route('/movieById/:mid')
    .get(movies.getMovieById);

router
    .route('/movie/:mid')
    .put(movies.updateMovie);

router
    .route('/hall')
    .post(moviehalls.createMovieHall);

router
    .route('/hall/:mid')
    .get(moviehalls.getMovieHallSeats);

router
    .route('/halls')
    .get(moviehalls.getMovieHalls);


router
    .route('/hall/:hid')
    .put(moviehalls.updateMovieHall);


module.exports = router;
