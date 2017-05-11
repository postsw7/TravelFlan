import React, { Component } from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import fdtLogo from '../../img/fdtLogo_EngChi.png';
import './Nav.css';


class NavComponent extends Component {
  render () {
    return (
      <div id="header">
        <div className="navbar-wrapper">
          <Navbar inverse collapseOnSelect fluid>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="http://www.freedtour.com/">
                  <img src={fdtLogo} alt="freeDtour Logo" className="logo" />
                </a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                <NavItem onClick={() => { this.props.openSignin() }}>Sign in</NavItem>
                <NavItem onClick={() => { this.props.openSignup() }}>Registered</NavItem>
                <NavDropdown eventKey={3} title="Hong Kong dollars" id="basic-nav-dropdown">
                  <MenuItem eventKey={3.1}>HK $ HK $</MenuItem>
                  <MenuItem eventKey={3.2}>NT $ NT $</MenuItem>
                  <MenuItem eventKey={3.3}>US dollars</MenuItem>
                  <MenuItem eventKey={3.4}>RMB | Y</MenuItem>
                </NavDropdown>
                <NavDropdown eventKey={4} title="Traditional Chinese" id="basic-nav-dropdown">
                  <MenuItem eventKey={4.1}>Traditional Chinese</MenuItem>
                  <MenuItem eventKey={4.2}>Simplified Chinese</MenuItem>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    );
  }
}

export default NavComponent;
