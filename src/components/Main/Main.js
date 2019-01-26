import React, { Component } from "react";
import SectionTitle from "./../SectionTitle/SectionTitle";
import Header from "./../Header/Header";
import { getText } from "./../../services/translation";
import HobbieList from "./../HobbiesList/HobbiesList";
import Presentation from "./../Presentacion/Presentation";
import Quote from "./../Quote/Quote";
import HireCardsList from "./../HireCardsList/HireCardsList";
import Contact from "./../Contact/Contact";

class Main extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    const {languageSelected} = this.props;
    return (
      <div>
        <Header languageSelected={languageSelected} />
        <Presentation languageSelected={languageSelected} />
        <HobbieList />
        <section className="quoteSection col">
          <div className=" presentation">
            <Quote
           
              styleClass="h2 ml-3 mr-3 text-center quote"
              text= {getText("CODEQUOTE",languageSelected)}
              title= {getText("AUTHOR",languageSelected)}
            />{" "}
          </div>
        </section>{" "}
        <section className="hireSection">
          <SectionTitle
         
            text={getText("HIRETITLE",languageSelected)}
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
