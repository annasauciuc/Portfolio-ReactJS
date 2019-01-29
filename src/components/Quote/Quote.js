import React from "react";
import "./Quote.css";
const Quote = props => {
  const { styleClass, text, id,title } = props;
  return (
    <blockquote className={styleClass} id={id}  >
      <em>{text}</em>
      <br/>
      <p className={styleClass}> {title} </p>
     
    </blockquote>
  );
};

export default Quote;
