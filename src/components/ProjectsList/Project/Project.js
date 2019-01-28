import React, { Component } from "react";

import netflix from './../../ProjectsPage/projectsImages/netflix.jpg'
import './Project.css'

class Project extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { text, title, id } = this.props;
    return (
        <section className="floats" data-aos="fade-down">
        <div className="row align-items-center no-gutters" data-aos="fade-down">
            <div className="col-md-6">
                <div className="text-center">
                    <div className="mb-5">
                        <h3 className=" h2 mb-4" > {title}</h3>
                        <p className="" >{text}</p>
                    </div>
                    <a className="btn btn-outline greenFav g-font-weight-600 rounded p-1" href="https://github.com/annasauciuc/Mock-up-with-floats" target="_blank">See github<i className="fab ml-1  fa-github "></i></a>
                    <a href="http://mockup-with-floats.amsauciuc.com" className="btn btn btn-outline greenFav g-font-weight-600 rounded p-1" target="_blank">Preview<i className="far  ml-1  fa-eye"></i></a></div>

                <div className="text-center">
                    <div className="mt-3 text-center">
                        <i className="fab fa-2x fa-html5 "></i><i className="fab fa-2x fa-css3 "></i>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="flex-centered height-600 container-image text-center">
                    <div className=" bg-white pa-25">
                        <img className="img-fluid" src={netflix} alt="image project with floats" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
  }
}

export default Project;
