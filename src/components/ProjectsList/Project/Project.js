import React, { Component } from "react";

import netflix from "./../../ProjectsPage/projectsImages/netflix.jpg";
import "./Project.css";

class Project extends Component {
  constructor(props) {
    super(props);
  }

  checkClassParityDiv1 = () => {

    const { par } = this.props;
    console.log('par :', par);
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
    const { text, title, id, classStyle,links,hrefGit,hrefPreview, ...other } = this.props;
console.log('other,hrefGit,hrefPreview :', other,links,hrefPreview,hrefGit);
    return (
      <section data-aos="fade-down">
        <div className="row align-items-center no-gutters">
          <div className={this.checkClassParityDiv1()}>
            <div className="text-center">
              <div className="mb-5">
                <h3 className="h2  mb-4">
                  {title}
                </h3>
                <p >
                  {text}
                </p>
              </div>
              <a
                className="btn btn-outline greenFav g-font-weight-600 rounded p-1"
                href={hrefGit}
                target="_blank"
              >
                See github
                <i className="fab ml-1  fa-github " />
              </a>
              <a
                href={hrefPreview}
                className="btn btn btn-outline greenFav g-font-weight-600 rounded p-1"
                target="_blank"
              >
                Preview
                <i className="far  ml-1  fa-eye" />
              </a>
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
                <img
                  className="img-fluid"
                  src={netflix}
                  alt="project how i am"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Project;
