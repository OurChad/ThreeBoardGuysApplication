import React, { PureComponent } from 'react';

class SignInPage extends PureComponent {

    render() {
        return <div><button onClick={this.props.signIn}>Sign in</button></div>
    };
}

export default SignInPage;