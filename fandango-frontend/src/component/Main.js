import React from 'react';
import {Switch,Route} from 'react-router-dom';
import movies from './movies';
import ticketboxoffice from './ticketboxoffice';
import userhome from './userhome';
import moviedetails from './moviedetails';
import seatpicker from './seatpicker';
import adminUserDash from './adminUserDash';
import signin from './signin';
import signup from './signup';
import MovieTimeTicket from './movieTimeTicket';
import admindashboard from './admindashboard';
import adminAddUser from './adminAddUser';
import checkout from './checkout';
import confirmation from './confirmation';
import adminMovieDash from './adminMovieDash';
import adminAddMovie from './adminAddMovie';
import MovieTimeHalls from './movieTimeHalls';
import AdminMovieBookings from './adminMovieBookings';
import adminBookingDash from './adminBookingDash';
import adminViewBooking from './adminViewBooking';
import adminHallDash from './adminHallDash';
import adminAddHall from './adminAddHall';
import PageNotFound from './pageNotFound';
import AdminViewMovieBookings from './adminViewMovieBookings'; 
import testTiming from './testTiming';
const Main = () => (
    <Switch>
        <Route exact path = '/' component={userhome}/>
        <Route exact path = '/transaction/ticketboxoffice' component={ticketboxoffice} />
        <Route exact path = '/transaction/seatpicker' component={seatpicker} />
        <Route exact path = '/movies' component={movies}/>
        <Route exact path ='/moviedetails/:mid' component={moviedetails}/>
        <Route exact path = '/adminuser' component={adminUserDash}/>
        <Route exact path = '/signin' component={signin}/>
        <Route exact path = '/signup' component={signup}/>
        <Route exact path = '/movieTimeTicket' component={MovieTimeTicket}/>
        <Route exact path ='/admindashboard' component={admindashboard}/>
        <Route exact path = '/adduser' component={adminAddUser}/>        
        <Route exact path = '/movieTimeHalls' component={MovieTimeHalls}/>
        <Route exact path = '/movieTimeTicket' component={MovieTimeTicket}/>
        <Route exact path = '/transaction/checkout' component={checkout} />
        <Route exact path = '/transaction/confirmation' component={confirmation} />
        <Route exact path = '/moviedash' component={adminMovieDash} />
        <Route exact path = '/addmovie' component={adminAddMovie} />
        <Route exact path = '/moviebookings' component={AdminMovieBookings} />
        <Route exact path = '/adminbooking' component={adminBookingDash}/>
        <Route exact path = '/viewbooking' component={adminViewBooking}/>
        <Route exact path = '/halldash' component={adminHallDash}/>
        <Route exact path = '/addhall' component={adminAddHall}/>
        <Route exact path = '/allmoviebookings' component={AdminViewMovieBookings}/>
        <Route exact path = '/test' component={testTiming}/>
    </Switch>
)

export default Main;
