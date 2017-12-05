import React, { PureComponent } from 'react';
import {Image} from 'react-bootstrap';
import './ProfileImg.css'

class ProfileImg extends PureComponent {

    render() {
        return (
            <div className="ProfileImg">
                <Image src={this.props.image} responsive thumbnail/>
            </div>
        );
    }
}

export default ProfileImg;