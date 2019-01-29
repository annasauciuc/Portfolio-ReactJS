import React from "react";
import "./Quote.css";
const Quote = props => {
  const { styleClass, text, id } = props;
  return (
    <blockquote className={styleClass} id={id} >
      <em>{text}</em>
    </blockquote>
  );
};

export default Quote;
