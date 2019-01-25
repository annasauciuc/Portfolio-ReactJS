import React, { Component } from "react";
import "./Quote.css";
const Quote = props => {
  const { className, text, title, id } = props;
  return (
    <div>
      <blockquote className={className} id={id} data-aos="fade-down">
        <h2>
          <em>{text}</em>
        </h2>
      </blockquote>
      <p className={className} id={id} data-aos="fade-down">
        <u> {title} </u>
      </p>
    </div>
  );
};

export default Quote;
