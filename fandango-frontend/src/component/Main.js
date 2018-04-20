import React from 'react';
import {Switch,Route} from 'react-router-dom';
import movies from './movies';

const Main = () => (
    <Switch>
        <Route exact path = '/movies' component={movies}/>
    </Switch>
)

export default Main;