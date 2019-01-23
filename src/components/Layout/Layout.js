import React, { Component } from "react";

import Header from "./Header/Header";
import Navigation from "./Header/Navigation/Navigation";
import HobbieList from "./../HobbiesList/HobbiesList";

import Presentation from "./../Presentacion/Presentation";


class Layout extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Header />
        <Presentation/>
        <HobbieList/>
      </div>
    );
  }
}

export default Layout;
