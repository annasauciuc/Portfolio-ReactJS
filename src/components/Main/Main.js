import React, { Component } from "react";
import SectionTitle from "./../SectionTitle/SectionTitle";
import Header from "./../Header/Header";

import HobbieList from "./../HobbiesList/HobbiesList";
import Presentation from "./../Presentacion/Presentation";
import Quote from "./../Quote/Quote";
import HireCardsList from "./../HireCardsList/HireCardsList";
import Contact from "./../Contact/Contact";

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Presentation />
        <HobbieList />
        <section className="quoteSection col">
          <div className=" presentation">
            <Quote
              styleClass="h2 ml-3 mr-3 text-center quote"
              text="Programming isn’t something you do from 9 to 17. It’s not a job, it’s a way of life. "
              title=" - A smart guy -"
            />{" "}
          </div>
        </section>{" "}
        <section className="hireSection">
          <SectionTitle
            text=" Why would you want me in your team ?"
            title="h2"
            classStyles="mt-5 h1 text-center p-5"
          />

          <div className="col-lg-12 d-inline-flex mt-5 col-xl-12 col-md-12 col-xs-12">
            <HireCardsList />
          </div>
        </section>
        <Contact />
      </div>
    );
  }
}

export default Main;
