import React, { Component } from "react";

import Navigation from "./../Navigation/Navigation";
import Footer from "./Footer/Footer";
import { Route, Switch, BrowserRouter } from "react-router-dom";
class Layout extends Component {
  onChangeLanguageHandler = lang => {
    const { onChangeLanguage } = this.props;
    onChangeLanguage(lang);
  };
  render() {
    const { languageSelected } = this.props;

    return (
      <div>
      
        <Navigation
          languageSelected={languageSelected}
          onChangeLanguage={this.onChangeLanguageHandler}
        />
        
        {this.props.children}
        <Footer languageSelected={languageSelected} />
      </div>
    );
  }
}

export default Layout;
