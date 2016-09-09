import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class Header extends React.Component{
    render() {
        return (
          <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#">React-Bootstrap Sample</a>
              </Navbar.Brand>
            </Navbar.Header>

            <Nav>
              <LinkContainer to={"/"}><NavItem>Home</NavItem></LinkContainer>
              <LinkContainer to={"/users"}><NavItem>Users</NavItem></LinkContainer>

              <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
              </NavDropdown>
            </Nav>

            <Nav pullRight>
              <NavDropdown eventKey={1} title="Settings" >
                <MenuItem eventKey={1.1}>Profile</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={1.2}>Sign out</MenuItem>
              </NavDropdown>
            </Nav>
          </Navbar>
        )
    }
}

export default Header;
