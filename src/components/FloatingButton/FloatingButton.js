import React from "react";

const FloatingButton = props => {
  const { href} = props;
  return (
    <a href={href}>
      {" "}
      <button id="floating-action-button" className="btn position-fixed shadow">
        <i className="m-auto fas text-white fa-arrow-up btn-md btnFloat rounded-circle" />
      </button>{" "}
    </a>
  );
};

export default FloatingButton;
