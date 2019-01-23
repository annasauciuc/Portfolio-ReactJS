import React, { Component } from "react";

import Header from "./Header/Header";
import Navigation from "./Header/Navigation/Navigation";

import Presentation from "./../Presentacion/Presentation";

class Layout extends Component {
  render() {
    return (
      <div>
        <Navigation />

        <Header />
        <Presentation/>
      </div>
    );
  }
}

export default Layout;
