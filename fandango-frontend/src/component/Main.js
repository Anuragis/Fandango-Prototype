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
import PageNotFound from './pageNotFound';
const Main = () => (
    <Switch>
        <Route exact path = '/' component={userhome}/>
        <Route path = '/transaction/ticketboxoffice' component={ticketboxoffice} />
        <Route path = '/transaction/seatpicker' component={seatpicker} />
        <Route path = '/movies' component={movies}/>
        <Route path ='/moviedetails/:mid' component={moviedetails}/>
        <Route path = '/adminuser' component={adminUserDash}/>
        <Route path = '/signin' component={signin}/>
        <Route path = '/signup' component={signup}/>
        <Route path = '/movieTimeTicket' component={MovieTimeTicket}/>
        <Route path='/admindashboard' component={admindashboard}/>
        <Route path = '/movieTimeHalls' component={MovieTimeHalls}/>
        <Route path = '/adduser' component={adminAddUser}/>        
        <Route path = '/movieTimeHalls' component={MovieTimeHalls}/>
        <Route path = '/transaction/checkout' component={checkout} />
        <Route path = '/transaction/confirmation' component={confirmation} />
        <Route path = '/moviedash' component={adminMovieDash} />
        <Route path = '/addmovie' component={adminAddMovie} />
        <Route component={PageNotFound} />
    </Switch>
)

export default Main;
