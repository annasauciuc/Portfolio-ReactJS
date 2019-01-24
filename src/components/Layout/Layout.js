import React, { Component } from "react";

import Header from "./Header/Header";
import Navigation from "./Header/Navigation/Navigation";
import HobbieList from "./../HobbiesList/HobbiesList";
import Presentation from "./../Presentacion/Presentation";
import Quote from "./Footer/Quote/Quote";
import HireCards from './../HireCards/HireCards'

class Layout extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Header />
        <Presentation />
        <HobbieList />
        <Quote    text="Programming isn’t something you do from 9 to 17. It’s not a job, it’s a way of life. "
        title=" - A smart guy -"
      />{" "}
      <HireCards/>
      </div>
    );
  }
}

export default Layout;
