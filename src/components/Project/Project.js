import React, { Component } from "react";



class Project extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { text, title, id } = props;
    return (
        <section class="floats" data-aos="fade-down">
        <div class="row align-items-center no-gutters" data-aos="fade-down">
            <div class="col-md-6">
                <div class="text-center">
                    <div class="mb-5">
                        <h3 class=" h2 mb-4" > {title}</h3>
                        <p class="" >{text}</p>
                    </div>
                    <a class="btn btn-outline greenFav g-font-weight-600 rounded p-1" href="https://github.com/annasauciuc/Mock-up-with-floats" target="_blank">See github<i class="fab ml-1  fa-github "></i></a>
                    <a href="http://mockup-with-floats.amsauciuc.com" class="btn btn btn-outline greenFav g-font-weight-600 rounded p-1" target="_blank">Preview<i class="far  ml-1  fa-eye"></i></a></div>

                <div class="text-center">
                    <div class="mt-3 text-center">
                        <i class="fab fa-2x fa-html5 "></i><i class="fab fa-2x fa-css3 "></i>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="flex-centered height-600 container-image text-center">
                    <div class=" bg-white pa-25">
                        <img class="img-fluid" src="/img/projects/floats.jpg" alt="image project with floats" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
  }
}

export default Project;
