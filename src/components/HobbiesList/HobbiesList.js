import React, { Component } from "react";
import Hobbie from "./../Hobbie/Hobbie";
import "./HobbiesList.css";
import { getText } from "./../../services/translation";
import SectionTitle from "./../SectionTitle/SectionTitle";

class HobbieList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { languageSelected } = this.props;
    return (
      <section className="hobbiesSection pb-5">
        <hr className="underlined" />
        <SectionTitle
          text=  {getText("HOBBIESTITLE", languageSelected)}
          classStyles="autoWidth text-light"
        />
        <hr className="underlined" />
        <div className="container">
          <div className="col-lg-12  col-xl-12  col-md-12 col-xs-12">
            <div className="text-center mt-5 bubbles" id="hobbies">
              <Hobbie text="Sport" styleClass="fas fa-running" />
              <Hobbie text="Music" styleClass="fa fa-headphones" />
              <Hobbie text="Travel" styleClass="fas fa-plane-departure" />
              <Hobbie text="Cook" styleClass="fas fa-utensils" />
              <Hobbie text="Walk" styleClass="fas fa-hiking" />
              <Hobbie text="Series" styleClass="fas fa-video" />
              <Hobbie text="Natur" styleClass="fa fa-tree" />
              <Hobbie text="Photo" styleClass="fas fa-camera" />
              <Hobbie text="Family" styleClass="fas fa-home" />
              <Hobbie text="Read" styleClass="fas fa-book-reader" />
              <Hobbie text="Animals" styleClass="fas fa-paw" />
              <Hobbie text="Theater" styleClass="fas fa-theater-masks" />
              <Hobbie text="Dance" styleClass="fas fa-heart" />
              <Hobbie text="Code" styleClass="fas fa-code" />
              <Hobbie text="Eat" styleClass="fas fa-utensils" />
              <Hobbie text="Not Sleep" styleClass="fas fa-heart" />
              <Hobbie text="Love" styleClass="fas fa-heart" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default HobbieList;
