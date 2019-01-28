import React, { Component } from "react";
import Navigation from "./../Navigation/Navigation";
import HomePage from "./../HomePage/HomePage";
import ProjectsPage from "./../ProjectsPage/ProjectsPage";
import Footer from "./Footer/Footer";
import Aux from './../Hoc/_Aux'
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
        <HomePage languageSelected={languageSelected}/>
        <ProjectsPage  languageSelected={languageSelected}/>
        <Footer languageSelected={languageSelected} />
      </Aux>
    );
  }
}

export default Layout;
