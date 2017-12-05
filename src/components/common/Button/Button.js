import React, { PureComponent } from 'react';
import { Button as BSButton} from 'react-bootstrap';
import { bootstrapUtils } from 'react-bootstrap/lib/utils';

import './Button.css'

bootstrapUtils.addStyle(BSButton, 'BSPrimary');
bootstrapUtils.addStyle(BSButton, 'BSDefault');

class Button extends PureComponent {

    state = {
        flavour: Button.getButtonFlavourStyle(this.props.flavour)
    };

    static getButtonFlavourStyle = (flavour) => {
        let buttonFlavour;
        switch(flavour) {
            case 'primary': {
                buttonFlavour = 'BSPrimary';
                break;
            }
            default: {
                buttonFlavour = 'BSDefault';
                break;
            }
        }

        return buttonFlavour;
    };

    render() {
        return (
            <div>
                <BSButton bsStyle={this.state.flavour} onClick={this.props.action}>{this.props.label}</BSButton>
            </div>
        );
    }
}

export default Button;