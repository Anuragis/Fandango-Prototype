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
var redis = require('../controllers/redis_cache.js');


/**routes for bookings start */
router
    .route('/booking')
    .post(bookings.createBooking);

router
    .route('/booking/:_id')
    .delete(bookings.deleteBooking);

router
    .route('/bookingByUserId/:userid')
    .get(redis.cache,bookings.findBookingsByUserid);
    
router
    .route('/bookingByMovieId/:moviename')
    .get(redis.cache,bookings.findBookingsByMoviename);

router
    .route('/bookingByHallId/:hallname')
    .get(redis.cache,bookings.findBookingsByHallname);

router
    .route('/bookings')
    .get(redis.cache,bookings.getAllBookings);

router
    .route('/booking/:bid')
    .get(redis.cache,bookings.getBookingById);

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
    .get(redis.cache,movies.getAllMovies);

router
    .route('/movieByCategory/:category')
    .get(movies.getMovieByCategory);

router
    .route('/movieById/:mid')
    .get(redis.cache,movies.getMovieById);

router
    .route('/movie/:mid')
    .put(movies.sImg,movies.updateMovie);

router
    .route('/movieByName/:moviename')
    .get(redis.cache,movies.getMovieByName);

router
    .route('/savemovie/:mid')
    .put(movies.sImg,movies.updateMovie);

/** routes for movie end*/


/**routes for hall start */
router
    .route('/hall')
    .post(moviehalls.createMovieHall);


router
    .route('/halls')
    .get(redis.cache,moviehalls.getMovieHalls);


router
    .route('/hall/:hid')
    .put(moviehalls.updateMovieHall);

router
    .route('/hall/:moviename')
    .get(redis.cache,moviehalls.getHallByMovieName);


router  
    .route('/hallById/:hid')
    .get(redis.cache,moviehalls.getHallById);


/**routes for hall end */



/**routes for user start */
router
    .route('/users')
    .get(redis.cache,users.getAllUsers);

router
    .route('/user/:uid')
    .delete(users.deleteUser);

/**router
    .route('/user')
    .post(users.createUser);*/


router
    .route('/user/:uid')
    .get(redis.cache,users.getUserById);

router
    .route('/user/:uid')
    .put(users.updateUser);

router
    .route('/saveImage/:uid')
    .put(users.sImg, users.updateUser); 

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
