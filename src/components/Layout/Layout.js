import React, { Component } from "react";
import Navigation from "./../Navigation/Navigation";
import HomePage from "./../HomePage/HomePage";
import ProjectsPage from "./../ProjectsPage/ProjectsPage";
import Footer from "./Footer/Footer";
import Aux from "./../Hoc/_Aux";
import { Route, Link } from "react-router-dom";
class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      languageSelected: "eng"
    };
  }
  onChangeLanguage = lang => {
    if (lang == "esp") {
      this.setState({
        languageSelected: "esp"
      });
    } else if (lang == "eng") {
      this.setState({
        languageSelected: "eng"
      });
    }
  };
  render() {
    const { languageSelected } = this.state;
    return (
      <Aux>
        <Navigation
          languageSelected={languageSelected}
          onChangeLanguage={this.onChangeLanguage}
        />
        <Route  languageSelected={languageSelected} path="/" exact component={HomePage} />
        <Route
          languageSelected={languageSelected}
          path="/projects"
          component={ProjectsPage}
        />
        <Footer languageSelected={languageSelected} />
      </Aux>
    );
  }
}

export default Layout;
