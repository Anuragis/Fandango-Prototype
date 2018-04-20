import React from 'react';
import {Switch,Route} from 'react-router-dom';
import signin from './signin';


const Main = () => (
    <Switch>
        <Route exact path = '/' component = {signin}/>
    </Switch>
)

export default Main;