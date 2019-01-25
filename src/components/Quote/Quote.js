import React, { Component } from "react";
import "./Quote.css";
const Quote = props => {
  const { styleClass, text, title, id } = props;
  return (
    <blockquote className={styleClass} id={id} >
      <em>{text}</em>
    </blockquote>
  );
};

export default Quote;
