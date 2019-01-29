import React, { Component } from "react";

import { getText } from "./../../services/translation";
import SectionTitle from "./../SectionTitle/SectionTitle";

class Presentation extends Component {
  
  render() {
    const { languageSelected } = this.props;
    return (
      <div data-aos="fade-down">
        <section className="mt-5 aboutMe autoWidth " id="aboutMe">
          <SectionTitle
            text={getText("SECTION_ABOUT_ME_TITLE", languageSelected)}
            title="h2"
            classStyles="font mb-1 text-dark mt-5 mb-1"
          />
          <hr className="underlined" />
          <div>
            <p className="mb-5 text-justify" id="aboutSectionText">
              {" "}
              {getText("SECTION_ABOUT_ME_TEXT", languageSelected)}
            </p>
          </div>
        </section>
      </div>
    );
  }
}

export default Presentation;
