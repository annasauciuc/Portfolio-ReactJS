import React, { Component } from "react";
import { getText } from "./../../services/translation";
import SectionTitle from "./../SectionTitle/SectionTitle";
import "./Contact.css";
import ContactForm from "./ContactForm";
const Contact = props => {
  const { languageSelected } = props;
  const urlTwitter = "https://twitter.com/@amsauciuc";
  const urlLinkedin =
    "https://www.linkedin.com/in/ana-maria-sauciuc-753ba8155/";
  const urlGit = "https://github.com/annasauciuc";
  const urlGmail = "mailto:hi@amsauciuc.com";
  return (
    <section
      className="contactSection text-center p-2"
      id="contact"
      data-aos="fade-down"
    >
      <SectionTitle
        text={getText("CONTACT_TITLE", languageSelected)}
        title="h2"
        styleClass="text-center font mb-5 text-light"
      />
      <div
        className="col-lg-12 d-inline-block text-center text-white mb-4"
        data-aos="fade-right"
      >
        <span className="h4 text-center font mb-5 text-light" id="contactText">
          {getText("CONTACT_TEXT", languageSelected)}{" "}
        </span>
        <a
          href={urlGmail}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white h4 hoverLine"
        >
          <u> hi@amsauciuc.com</u>
        </a>
      </div>
      <div className="text-white h1">||</div>
      <ContactForm />
      <div className="mb-2 mt-4 col-lg-12">
        <a href={urlTwitter} target="_blank" rel="noopener noreferrer">
          <i className="fab social fa-2x icon-twitter fa-twitter" />
        </a>
        <a href={urlLinkedin} target="_blank " rel="noopener noreferrer">
          <i className="fab social fa-2x icon-linkedin fa-linkedin-in " />
        </a>
        <a href={urlGit} target="_blank" rel="noopener noreferrer">
          <i className="fab icon-github fa-2x social fa-github" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
