import React, { Component } from "react";
import { withRouter } from "react-router-dom";
class FloatingButton extends Component {
  hrefButtonHandler = () => {
    let href = null;
    const { pathname } = window.location;
    pathname == "/" ? (href = "#typed") : (href = "#main");
    window.location = href;
  };
  render() {
    return (
      <button id="floating-action-button" className="btn position-fixed shadow">
        <a onClick={this.hrefButtonHandler}>
          {" "}
          <i className="m-auto fas text-white fa-arrow-up btn-md btnFloat rounded-circle" />{" "}
        </a>
      </button>
    );
  }
}

export default withRouter(FloatingButton);
