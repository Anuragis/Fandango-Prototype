import React from 'react';
import {Switch,Route} from 'react-router-dom';
import movies from './movies';
import ticketboxoffice from './ticketboxoffice';
import ticketboxoffice from './Headers';

const Main = () => (
    <Switch>
        <Route exact path = '/movies' component={movies}/>
        <Route exact path = '/' component={Headers}/>
        <Route exact path = '/transaction/ticketboxoffice' component={ticketboxoffice} />
    </Switch>
)

export default Main;