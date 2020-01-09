import React from "react";
import { getText } from "./../../services/translation";
import SectionTitle from "./../SectionTitle/SectionTitle";
import "./Contact.css";
import ContactForm from "./ContactForm";
import ExternalLink from './../Links/ExternalLink'
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
        styleClass="text-center font mb-5 text-white"
      />
      <div
        className="col-lg-12 d-inline-block text-center text-white mb-4"
        data-aos="fade-right"
      >
        <span className="h4 text-center font mb-5 text-light" id="contactText">
          {getText("CONTACT_TEXT", languageSelected)}{" "}
        </span>
        <ExternalLink href={urlGmail} className="text-white h4 hoverLine">
          <u> hi@amsauciuc.com</u>
        </ExternalLink>
      </div>
      <div className="mb-2 mt-4 col-lg-12">
        <ExternalLink href={urlTwitter} title="Twitter">
          <i className="fab social fa-2x icon-twitter fa-twitter" />
        </ExternalLink>
        <ExternalLink href={urlLinkedin} title="Linkedin">
          <i className="fab social fa-2x icon-linkedin fa-linkedin-in " />
        </ExternalLink>
        <ExternalLink href={urlGit} title="Github">
          <i className="fab icon-github fa-2x social fa-github" />
        </ExternalLink>
      </div>
    </section>
  );
};

export default Contact;
