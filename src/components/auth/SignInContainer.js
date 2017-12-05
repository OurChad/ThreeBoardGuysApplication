import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { JwtTokenName } from '../../config/config';
import SignInPage from './SignInPage';

class SignInContainer extends Component {

    signIn = () => {
        localStorage.setItem(JwtTokenName, {});
        this.props.setSession(true);
        this.setState({ redirectToReferrer: true });
    };

    constructor(props) {
        super(props);
        this.state = {
            redirectToReferrer: false
        };
    }

    render() {
        const { from } = this.props.location.state || { from: { pathname: '/' } };
        const { redirectToReferrer } = this.state;

        if (redirectToReferrer) {
            return (
                <Redirect to={from}/>
            )
        }
        return <SignInPage signIn={this.signIn}/>
    };
}

export default SignInContainer;