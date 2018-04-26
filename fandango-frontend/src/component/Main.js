import React from 'react';
import {Switch,Route} from 'react-router-dom';
import movies from './movies';
import ticketboxoffice from './ticketboxoffice';
import userhome from './userhome';
import moviedetails from './moviedetails';
import seatpicker from './seatpicker';
import admin from './admin';
import signin from './signin';
import signup from './signup';
<<<<<<< HEAD
//import MovieTimeTicket from './movieTimeTicket';
import MovieTimeHalls from './movieTimeHalls';
=======
import MovieTimeTicket from './movieTimeTicket';
import checkout from './checkout';
import confirmation from './confirmation';
>>>>>>> d2f6af35850c8ab5704b641b2bed0e334767a070

const Main = () => (
    <Switch>
        <Route exact path = '/' component={userhome}/>
        <Route path = '/transaction/ticketboxoffice' component={ticketboxoffice} />
        <Route path = '/transaction/seatpicker' component={seatpicker} />
        <Route path = '/movies' component={movies}/>
        <Route path ='/moviedetails/:mid' component={moviedetails}/>
        <Route path = '/admin' component={admin}/>
        <Route path = '/signin' component={signin}/>
        <Route path = '/signup' component={signup}/>
<<<<<<< HEAD
        <Route path = '/movieTimeTicket' component={MovieTimeHalls}/>
=======
        <Route path = '/movieTimeTicket' component={MovieTimeTicket}/>
        <Route path = '/transaction/checkout' component={checkout} />
        <Route path = '/transaction/confirmation' component={confirmation} />
>>>>>>> d2f6af35850c8ab5704b641b2bed0e334767a070
    </Switch>
)

export default Main;
