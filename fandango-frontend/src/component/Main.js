import React from 'react';
import {Switch,Route} from 'react-router-dom';
import movies from './movies';
import ticketboxoffice from './ticketboxoffice';
<<<<<<< HEAD
=======
import headers from './headers';

>>>>>>> 9f9d4a779235c4c50eebdc563c463c388421f049
const Main = () => (
    <Switch>
        <Route exact path = '/movies' component={movies}/>
        <Route exact path = '/' component={headers}/>
        <Route exact path = '/transaction/ticketboxoffice' component={ticketboxoffice} />
    </Switch>
)

export default Main;