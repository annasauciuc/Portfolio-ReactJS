import React, { Component } from "react";
import SectionTitle from "./../SectionTitle/SectionTitle";
import "./Contact.css";
const Contact = props => {
  const{title,email}=props
  return (
    <section
      className="contactSection text-center p-2"
      id="contact"
      data-aos="fade-down"
    >
      <SectionTitle
        text="Contact"
        title="h2"
        styleClass="text-center font mb-5 text-light"
      />
      <div
        className="col-lg-12 d-inline-block text-center text-white mb-4"
        data-aos="fade-right"
      >
        <span className="h4 text-center font mb-5 text-light" id="contactText">
          If you want to contact with me{" "}
        </span>
        <a
          href="mailto:hi@amsauciuc.com"
          target="_blank"
          className="text-white h4 hoverLine"
        >
          <u> hi@amsauciuc.com</u>
        </a>
      </div>
      <div className="mb-2 col-lg-12">
        <a href="https://twitter.com/@amsauciuc" target="_blank">
          <i className="fab social fa-2x icon-twitter fa-twitter" />
        </a>
        <a
          href="https://www.linkedin.com/in/ana-maria-sauciuc-753ba8155/"
          target="_blank "
        >
          <i className="fab social fa-2x icon-linkedin fa-linkedin-in " />
        </a>
        <a href="https://github.com/annasauciuc" target="_blank">
          <i className="fab icon-github fa-2x social fa-github" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
