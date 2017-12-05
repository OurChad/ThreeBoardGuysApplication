import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { JwtTokenName } from '../../config/config';

class SignOutPage extends Component {

    state = {
        redirectToReferrer: false
    };

    signOut = () => {
        localStorage.removeItem(JwtTokenName);
        this.props.setSession(false);
        this.setState({ redirectToReferrer: true });
    };

    render() {
        const { from } = this.props.location.state || { from: { pathname: '/' } };
        const { redirectToReferrer } = this.state;

        if (redirectToReferrer) {
            return (
                <Redirect to={from}/>
            )
        }
        return <div><button onClick={this.signOut}>Sign Out</button></div>
    };
}

export default SignOutPage;