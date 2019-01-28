import React, { Component } from "react";
import "./Navigation.css";
import favicon from "./images/favicon.png";
import spainFlag from "./images/spain-flag-icon-32.png";
import englandFlag from "./images/united-kingdom-flag-icon-32.png";

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navCollapsed: true,
      languageSelected: this.props.languageSelected
    };
  }
  onToggleNav = () => {
    this.setState({
      navCollapsed: !this.state.navCollapsed
    });
  };
  selectLanguage = (lang) => {
    const {onChangeLanguage} = this.props;
    onChangeLanguage(lang);
  };
  render() {
    const { navCollapsed } = this.state;
    return (
      <div>
        <nav className="navbar fixed-top  navbar-expand-lg navbar-dark">
          <a className="text-light mr-auto" href="#">
            {" "}
            <img src={favicon} style={{ width: "80px" }} alt="favicon am" />
          </a>
          <div
            onClick={this.onToggleNav}
            className="navbar-toggler"
            role="button"
            aria-controls="navbarToggler"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <div className="nav__spans">
              <span className="nav_span--1" />
              <span className="nav_span--2" />
              <span className="nav_span--3" />
              <span className="nav_span--4" />
            </div>
          </div>
          <div
            className={(navCollapsed ? "collapse" : "") + " navbar-collapse"}
          >
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link hoverLine"
                  id="menuMyProjects"
                  href="html/projects.html"
                >
                  PROJECTS<span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link hoverLine"
                  id="menuAbout"
                  href="#aboutMe"
                >
                  ABOUT
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link hoverLine"
                  id="menuContact"
                  href="#contact"
                >
                  CONTACT
                </a>
              </li>
            </ul>
            <div className="form-inline my-2 my-lg-0">
              <a
                onClick={() => {
                  this.selectLanguage("esp");
                }}
                title="Spanish"
                className="nav-link text-white"
                id="spain"
                href="#"
              >
                <img src={spainFlag} alt="spain flag" />
              </a>

              <a
                onClick={() => {
                  this.selectLanguage("eng");
                }}
                title="English"
                className="nav-link text-white"
                id="england"
                href="#"
              >
                <img src={englandFlag} alt="england flag" />
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navigation;
