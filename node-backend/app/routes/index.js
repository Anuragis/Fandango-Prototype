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
var logs=require('../controllers/logs.js');


/**routes for bookings start */
router
    .route('/booking')
    .post(bookings.createBooking);

router
    .route('/booking/:_id')
    .delete(bookings.deleteBooking);

router
    .route('/bookingByUserId/:userid')
    .get(bookings.findBookingsByUserid);
    
router
    .route('/bookingByMovieId/:moviename')
    .get(bookings.findBookingsByMoviename);

router
    .route('/bookingByHallId/:hallname')
    .get(bookings.findBookingsByHallname);

router
    .route('/bookings')
    .get(bookings.getAllBookings);

router
    .route('/booking/:bid')
    .get(bookings.getBookingById);

/** routes for bookings end*/

/** routes for signin/up start*/
router
    .route('/signup')
    .post(signup.signUp);

router
    .route('/signin')
    .post(signin.signIn);

/** routes for signin/up end*/


/** routes for movie start*/
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

/** routes for movie end*/


/**routes for hall start */
router
    .route('/hall')
    .post(moviehalls.createMovieHall);


router
    .route('/halls')
    .get(moviehalls.getMovieHalls);


router
    .route('/hall/:hid')
    .put(moviehalls.updateMovieHall);

router
    .route('/hall/:moviename')
    .get(moviehalls.getHallByMovieName);


/**routes for hall end */



/**routes for user start */
router
    .route('/users')
    .get(users.getAllUsers);

router
    .route('/user/:uid')
    .delete(users.deleteUser);

/**router
    .route('/user')
    .post(users.createUser);*/


router
    .route('/user/:uid')
    .get(users.getUserById);

router
    .route('/user/:uid')
    .put(users.updateUser);

/**routes for user end */


/**routes for logs start*/

router
    .route('/logs')
    .get(logs.getLogs);

router
    .route('/log')
    .post(logs.createLog);


/**routes for logs end */
module.exports = router;
