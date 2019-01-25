import React, { Component } from "react";

const SectionTitle = props => {
  const { text, classStyles } = props;
  return (
    <h2 className={classStyles} id="" data-aos="fade-right">
      {text}
    </h2>
  );
};

export default SectionTitle;
