import React, { Component } from "react";

import "./Project.css";
import ExternalLink from "../../Links/ExternalLink";

class Project extends Component {
  checkClassParityDiv1 = () => {
    const { par } = this.props;

    if (par) {
      return "col-md-6 order-md-2";
    } else {
      return "col-md-6";
    }
  };
  checkClassParityDiv2 = () => {
    const { par } = this.props;
    if (par) {
      return "col-md-6 order-md-1";
    } else {
      return "col-md-6";
    }
  };
  render() {
    const {
      text,
      title,
      id,
      classStyle,
      links,
      hrefGit,
      hrefPreview,
      src,
      alt,
      ...other
    } = this.props;

    return (
      <section
        className="row align-items-center no-gutters"
        data-aos="fade-down" 
      >
        <div  className={this.checkClassParityDiv1()}>
          <div className="text-center">
            <div className="mb-5">
              <h3 className="h2  mb-4">{title}</h3>
              <p>{text}</p>
            </div>
            <ExternalLink
              className="btn btn-outline greenFav g-font-weight-600 rounded p-1"
              href={hrefGit}>
              See github
              <i className="fab ml-1  fa-github " />
            </ExternalLink>
            <ExternalLink
              href={hrefPreview}
              className="btn btn btn-outline greenFav g-font-weight-600 rounded p-1">
              Preview
              <i className="far  ml-1  fa-eye" />
            </ExternalLink>
          </div>
          <div className="text-center">
            <div className="mt-3 text-center">
              <i className="fab fa-2x fa-sass" />{" "}
              <i className="fab fa-2x fa-html5 " />
              <i className="fab fa-2x fa-css3 " />
            </div>
          </div>
        </div>
        <div className={this.checkClassParityDiv2()}>
          <div className="flex-centered height-600 container-image text-center">
            <div className="shadow bg-white pa-25">
              <img className="img-fluid" src={src} alt={alt} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Project;
