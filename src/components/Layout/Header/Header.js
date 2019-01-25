import React from "react";
import Typeed from '../../Typed/Typeed'
import "./Header.css";
const Header = () => {
  return (
    <section className="jumbo item" data-aos="fade-down">
      <div className="presentation">
        <div className="headerTitleOverlay text-left">
          <span className="text-light" id="typed" />
          <Typeed/>
          <p
            className="h1 text-light d-none d-sm-block d-lg-block d-xl-block"
            id="presentationText"
          >
            {" "}
            I'm here only because i found what i like and i won't let it go!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Header;
