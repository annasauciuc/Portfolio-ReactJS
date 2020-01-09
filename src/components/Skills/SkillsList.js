import React, { Component } from "react";
import Bubble from "../Hobbie/Bubble";
import "./SkillsList.css";
import { getText } from "./../../services/translation";
import SectionTitle from "./../SectionTitle/SectionTitle";

class SkillsList extends Component {
 
  render() {
    const { languageSelected } = this.props;
    return (
      <section className="hobbiesSection pb-5">
        <hr className="underlined" />
        <SectionTitle
          text={getText("SKILLS", languageSelected)}
          classStyles="autoWidth text-light"
        />
        <div className="container">
          <div className="col-lg-12  col-xl-12  col-md-12 col-xs-12 ">
            <div
              className="text-center mt-5"
              id="skillsDivs"
              data-aos="fade-down"
            >
              <Bubble styleClass="devicon-html5-plain colored" />
              <Bubble styleClass="devicon-css3-plain colored" />
              <Bubble styleClass="devicon-sass-original colored" />
              <Bubble styleClass="devicon-bootstrap-plain-wordmark colored" />
              <Bubble styleClass="devicon-react-plain colored" />
              <Bubble styleClass="devicon-angularjs-plain colored" />
              <Bubble styleClass="devicon-javascript-plain colored" />
              <Bubble styleClass="devicon-jquery-plain colored" />
              <Bubble styleClass="devicon-nodejs-plain colored" />
              <Bubble styleClass="devicon-express-original colored" />
              <Bubble styleClass="devicon-git-plain colored" />
              <Bubble styleClass="devicon-mongodb-plain colored" />

            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default SkillsList;
