import React, { Component } from "react";
import Quote from "./../../Quote/Quote";
import "./Footer.css";
const Footer = props => {
  return (
    <footer className="py-3 text-center">
      <div className="d-sm-flex">
        <div className="col-md-5 col" >
          <Quote text="Stay passionate and free and you will thrive, i am sure!" />
        </div>
        <div className="col-md-7 col">
          <a href="#typed">
            {" "}
            <button
              id="floating-action-button"
              className="btn position-fixed shadow"
            >
              <i className="m-auto fas text-white fa-arrow-up btn-md btnFloat rounded-circle" />
            </button>{" "}
          </a>
          <p className=" ">&copy; 2018 Sauciuc Ana Maria</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
