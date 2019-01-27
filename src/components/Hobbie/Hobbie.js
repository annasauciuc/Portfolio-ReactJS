import React, { Component } from "react";

const Bubble = (props) => {
  return (
    <div data-aos="fade-right">
      {" "}
      <p>
        <i className={props.styleClass} />
        <br />
        <span>{props.text}</span>
      </p>
    </div>
  );
};

export default Bubble;
