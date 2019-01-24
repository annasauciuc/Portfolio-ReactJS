import React from "react";
import SectionTitle from "./../SectionTitle/SectionTitle";

const Presentation = () => (
  <div data-aos="fade-down">
    <section className="mt-5 aboutMe autoWidth " id="aboutMe">
      <SectionTitle
        text="About Me"
        title="h2"
        styleClass="font mb-1 text-dark mt-5 mb-1"
      />
      <hr className="underlined" />
      <div>
        <p className="mb-5 text-justify" id="aboutSectionText">
          {" "}
          I'm a self-taught Web Developer! Starting this wonderful journey with
          big aspiration, with endless dreams and a lot a hope. My journey
          started in the
          <a href="https://20h.es/" target="_blank" className="hoverLine">
            <strong>
              <u>20h Talent Bootcamp</u>
            </strong>
          </a>{" "}
          where i had the oportunity to meet a lot of talented people and
          adquire knowledge from them. <br />
          I'm a dreamer with my feet on the ground, a nature lover, world lover.
          I think what best defines me is the passion that i put in all that i
          do,no matter that is a project or just a simple matter of my cotidian
          life. Positive, negative, sad, happy. I have them all. Just so
          greatfull for the oportunity of life that was gaved to me. I never
          take things for granted.
          <br />
          <br />
          Do you want to see some of my starting
          <a href="./html/projects.html">
            <strong>
              <u>projects ?</u>
            </strong>
          </a>
          >
        </p>
      </div>
    </section>
  </div>
);

export default Presentation;
