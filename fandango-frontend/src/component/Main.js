import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Header from './Header';


const Main = () => (
    <Switch>
        <Route exact path = '/' component = {Header}/>
    </Switch>
)

export default Main;