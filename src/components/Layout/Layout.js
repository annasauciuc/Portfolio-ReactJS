import React, { Component } from "react";
import Navigation from "./../Navigation/Navigation";
import Main from "./../Main/Main";
import Footer from "./Footer/Footer";


class Layout extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default Layout;
