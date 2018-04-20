import React from 'react';
import {Switch,Route} from 'react-router-dom';
import movies from './movies';

const Main = () => (
    <Switch>
        <Route exact path = '/movies' component={movies}/>
        <Route exact path = '/transaction/ticketboxoffice' component={ticketboxoffice} />
    </Switch>
)

export default Main;