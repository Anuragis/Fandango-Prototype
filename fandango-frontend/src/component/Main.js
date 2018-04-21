import React from 'react';
import {Switch,Route} from 'react-router-dom';
import movies from './movies';
import ticketboxoffice from './ticketboxoffice';
import headers from './headers';
import moviedetails from './moviedetails';
import seatpicker from './seatpicker';
import admin from './admin';

const Main = () => (
    <Switch>
        <Route exact path = '/' component={headers}/>
        <Route exact path = '/transaction/ticketboxoffice' component={ticketboxoffice} />
        <Route exact path = '/transaction/seatpicker' component={seatpicker} />
        <Route exact path = '/movies' component={movies}/>
        <Route exact path ='/moviedetails/:mid' component={moviedetails}/>
        <Route exact path = '/admin' component={admin}/>
    </Switch>
)

export default Main;