import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import favicon from './images/favicon.png'
import spainFlag from './images/spain-flag-icon-32.png'
import englandFlag from './images/united-kingdom-flag-icon-32.png'

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar
          color="dark"
          light
          expand="md"
          className="fixed-top navbar-dark"
        >
          <NavbarBrand href="/">
            {" "}
            <img
              src={favicon}
              style={{ width: "80px" }}
              alt="favicon am"
            />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  PROJECTS
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">ABOUT</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  CONTACT
                </NavLink>
              </NavItem>
            </Nav>
            <div className="ml-auto navbar-nav">
              <NavItem>
                <NavLink href="/components/">
                  {" "}
                  <img
                    src={spainFlag}
                    alt="spain flag"
                  />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">
                  <img
                    src={englandFlag}
                    alt="england flag"
                  />
                </NavLink>
              </NavItem>
            </div>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
