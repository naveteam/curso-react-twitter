import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './Login';
import Timeline from './Timeline';
import SignUp from './SignUp';

export default props => (
    <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/cadastro" component={SignUp} />
        <Route exact path="/timeline" component={Timeline} />
    </Switch>
)