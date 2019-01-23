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
            <a className="text-light mr-auto">
              <img
                src="./../../assets/images/projects/favicon.png"
                style={{ width: "80px" }}
                alt="favicon am"
              />
            </a>
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
                <NavLink href="/components/">ABOUT</NavLink>
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
                  <a
                    title="Spanish"
                    className="nav-link text-white"
                    id="spain"
                    href="#"
                  >
                    <img
                      src="./../../assets/images/spain-flag-icon-32.png"
                      alt="spain flag"
                    />
                  </a>
                </NavLink>
              </NavItem>
              <NavItem >
                <NavLink href="/components/">
                  <a
                    title="English"
                    className="nav-link text-white"
                    id="england"
                    href="#"
                  >
                    <img
                      src="./../../assets/images/projects/spain-flag-icon-64.png"
                      alt="england flag"
                    />
                  </a>
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
