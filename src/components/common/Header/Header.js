import React, { PureComponent } from 'react';
import './Header.css'

class Header extends PureComponent {

    render() {
        return (
            <div className="Header">
                {this.props.header}
            </div>
        );
    }
}

export default Header;