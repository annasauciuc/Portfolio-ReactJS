import React, { Component } from "react";
import Bubble from "./../Hobbie/Hobbie";
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
              <Bubble text="Sport" styleClass="fas fa-running" />
              <Bubble text="Music" styleClass="fa fa-headphones" />
              <Bubble text="Travel" styleClass="fas fa-plane-departure" />
              <Bubble text="Cook" styleClass="fas fa-utensils" />
              <Bubble text="Walk" styleClass="fas fa-hiking" />
              <Bubble text="Series" styleClass="fas fa-video" />
              <Bubble text="Natur" styleClass="fa fa-tree" />
              <Bubble text="Photo" styleClass="fas fa-camera" />
              <Bubble text="Family" styleClass="fas fa-home" />
              <Bubble text="Read" styleClass="fas fa-book-reader" />
              <Bubble text="Animals" styleClass="fas fa-paw" />
              <Bubble text="Theater" styleClass="fas fa-theater-masks" />
              <Bubble text="Dance" styleClass="fas fa-heart" />
              <Bubble text="Code" styleClass="fas fa-code" />
              <Bubble text="Eat" styleClass="fas fa-utensils" />
              <Bubble text="Not Sleep" styleClass="fas fa-heart" />
              <Bubble text="Love" styleClass="fas fa-heart" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default HobbieList;
