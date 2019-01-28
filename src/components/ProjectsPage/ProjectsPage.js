import React, { Component } from "react";

import ProjectsList from "./../ProjectsList/ProjectsList";
import SectionTitle from "./../SectionTitle/SectionTitle";
import SkillsList from './../Skills/SkillsList'

import { getText } from "../../services/translation";

class ProjectsPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { languageSelected } = this.props;
    return (
      <section id="main" className="mt-5 mb-5" data-aos="fade-down">
        <div className="mb-5 container">
          <SectionTitle
            text={getText("PROJECTS", languageSelected)}
            title="h2"
            classStyles="h1 green ml-5 mt-5"
            data-aos="fade-down"
          />

          <hr className="underlined ml-5" />

          <ProjectsList languageSelected={languageSelected} />
          <SkillsList languageSelected={languageSelected}/>
        </div>
      </section>
    );
  }
}

export default ProjectsPage;
