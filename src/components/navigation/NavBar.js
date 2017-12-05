import React from 'react';
import { Navbar, Nav, NavItem} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { bootstrapUtils } from 'react-bootstrap/lib/utils';
import './NavBar.css'
import { JwtTokenName } from '../../config/config';
import logo from '../../logo.svg';


bootstrapUtils.addStyle(Navbar, 'bsCustom');
bootstrapUtils.addStyle(Navbar.Toggle, 'bsCustom');
bootstrapUtils.addStyle(Nav, 'bsCustom');

class NavBar extends React.PureComponent {

    routeMap = {
        "/": "Home",
        "/profile": "Profile",
        "/calendar": "Calendar",
        "/collection": "Collection",
        "/signout": "Sign Out",
    };

    getNavRoutes = (authenticatedSession) => {
        if (authenticatedSession) {
            return Object.keys(this.routeMap).map((key, i) => <LinkContainer key={key} to={key}><NavItem eventKey={i} >{this.routeMap[key]}</NavItem></LinkContainer>)
        }

        return <LinkContainer to="/signin"><NavItem eventKey={4} >Sign In</NavItem></LinkContainer>
    };

    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextState.authenticatedSession && !localStorage.getItem(JwtTokenName);
    // }

    componentWillReceiveProps(nextProps) {
        if (nextProps.authenticatedSession !== this.props.authenticatedSession) {
            this.setState({
                navRoutes: this.getNavRoutes(nextProps.authenticatedSession)
            });
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            navRoutes: this.getNavRoutes(props.authenticatedSession)
        };
    }

    render() {
        return (
            <Navbar collapseOnSelect bsStyle="bsCustom">
            <Navbar.Header>
              <Navbar.Brand className="navbar-brand-bsCustom">
                {/* <a href="#"><img src={logo} className="logo" alt="logo" /></a> */}
                <a href="#">Three Board Guys</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight bsStyle="bsCustom">
                  {this.state.navRoutes}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        );
    }
}

export default NavBar;