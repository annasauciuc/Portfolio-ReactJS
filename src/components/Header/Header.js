import React from "react";

import Typeed from "./../Typed/Typeed";
import { getText } from "./../../services/translation";
import "./Header.css";
const Header = props => {
  const { languageSelected } = props;
  return (
    <section className="jumbo item" data-aos="fade-down">
      <div className="presentation">
        <div className="headerTitleOverlay text-left">
          <span className="text-light" id="typed" />
          <Typeed />
          <p
            className="h1 text-light d-none d-sm-block d-lg-block d-xl-block"
            id="presentationText"
          >
            {" "}
            {getText("SUBTITLE", languageSelected)}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Header;
