

import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import Home from './pages/home/Home';
import Main from './pages/main/Main';

import {isAuthenticated} from './isAuthenticated';

//Componente Main - Caso esteja autenticado, direcionar para /home
const MainRoute = ({component : Component, ...rest}) => (
    <Route {...rest} render={props => (
        !isAuthenticated() ? (
            <Component {...props} />
        ) : (
            <Redirect to={{pathname: "/home", state: {from: props.location}}}/>
        )
    )} />
);

//Componente home - Caso não esteja autenticado, direcionar para /  (main)
const HomeRoute = ({component : Component, ...rest}) => (
    <Route {...rest} render={props => (
        isAuthenticated() ? (
            <Component {...props} />
        ) : (
            <Redirect to={{pathname: "/", state: {from: props.location}}}/>
        )
    )} />
);

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <MainRoute exact path="/" component={Main}/>
                <HomeRoute path="/home" component={Home}/>
            </Switch>        
        </BrowserRouter>
    );
};

export default Routes;