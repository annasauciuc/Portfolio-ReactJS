import React, { Component } from "react";
import { getText } from "./../../../services/translation";
import Quote from "./../../Quote/Quote";
import "./Footer.css";
import FloatingButton from "../../FloatingButton/FloatingButton";
import { withRouter } from "react-router-dom";
class Footer extends Component {
 
  render() {
    const { languageSelected } = this.props;

    return (
      <footer className="py-3 text-center">
        <div className="d-sm-flex">
          <div className="col-md-5 col">
            <Quote text={getText("FOOTER_TEXT", languageSelected)} />
          </div>
          <div className="col-md-7 col">
            <FloatingButton  />
            <p>&copy; 2018 Sauciuc Ana Maria</p>
          </div>
        </div>
      </footer>
    );
  }
}

export default withRouter(Footer);
