import React, { Component } from "react";
import Navigation from "./../Navigation/Navigation";
import HomePage from "./../HomePage/HomePage";
import Footer from "./Footer/Footer";


class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      languageSelected: "eng"
    };
  }
  onChangeLanguage= (lang) =>{
    if (lang == "esp") {
      this.setState({
        languageSelected: "esp"
      });
    } else if (lang == "eng") {
      this.setState({
        languageSelected: "eng"
      });
    }
  }
  render() {
    const { languageSelected } = this.state;
    return (
      <div>
        <Navigation languageSelected={languageSelected} onChangeLanguage={this.onChangeLanguage} />
        <HomePage languageSelected={languageSelected} />
        <Footer languageSelected={languageSelected} />
      </div>
    );
  }
}

export default Layout;
