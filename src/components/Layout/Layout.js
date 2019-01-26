import React, { Component } from "react";
import Navigation from "./../Navigation/Navigation";
import Main from "./../Main/Main";
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
        <Main languageSelected={languageSelected} />
        <Footer languageSelected={languageSelected} />
      </div>
    );
  }
}

export default Layout;
