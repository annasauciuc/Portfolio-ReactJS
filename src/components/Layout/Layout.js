import React, { Component } from "react";
import SectionTitle from "./../SectionTitle/SectionTitle";
import Header from "./Header/Header";
import Navigation from "./../Navigation/Navigation";
import HobbieList from "./../HobbiesList/HobbiesList";
import Presentation from "./../Presentacion/Presentation";
import Quote from "./../Quote/Quote";
import HireCards from "./../HireCards/HireCards";
import Contact from "./../Contact/Contact";
import Footer from "./Footer/Footer";

import { CardDeck } from "reactstrap";
class Layout extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Header />
        <Presentation />
        <HobbieList />
        <Quote
          text="Programming isn’t something you do from 9 to 17. It’s not a job, it’s a way of life. "
          title=" - A smart guy -"
        />{" "}
        <section className="hireSection">
          <SectionTitle
            text=" Why would you want me in your team ?"
            title="h2"
            classStyles="mt-5 h1 text-center p-5"
          />

          <div class="col-lg-12 d-inline-flex mt-5 col-xl-12 col-md-12 col-xs-12">
            <HireCards />
          </div>
        </section>
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Layout;
