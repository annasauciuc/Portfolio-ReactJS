import React, { Component } from "react";

import ProjectsList from "./../ProjectsList/ProjectsList";
import SectionTitle from "./../SectionTitle/SectionTitle";
import SkillsList from './../Skills/SkillsList'
import './ProjectsPage.css'

import { getText } from "../../services/translation";

class ProjectsPage extends Component {
 
  render() {
    const { languageSelected } = this.props;
    return (
      <section id="main" className="mt-5 " data-aos="fade-down">
        <div className="mb-5 pb-5 container">
          <SectionTitle
            text={getText("PROJECTS", languageSelected)}
            title="h2"
            classStyles="h1 green projectsTitle ml-5 mt-5"
            data-aos="fade-down"
           
          />

          <hr className="underlined ml-5" />

          <ProjectsList languageSelected={languageSelected} />
        
        </div>
        <SkillsList languageSelected={languageSelected}/>
      </section>
    );
  }
}

export default ProjectsPage;
