import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { JwtTokenName } from '../../config/config';

const AuthenticatedRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem(JwtTokenName) ? (
            <Component {...props}/>
        ) : (
            <Redirect to={{
                pathname: '/signin',
                state: { from: props.location }
            }}/>
        )
    )}/>
);

export default AuthenticatedRoute;
