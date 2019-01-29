import React, { Component } from "react";

import Project from "./Project/Project";
import "./Project/Project.css";
import { getProjectsData } from "./../../services/projects";
import { getText } from "./../../services/translation";
import images from './Project/images'
console.log('images', images)
class ProjectsList extends Component {

  render() {
    const { languageSelected } = this.props;
    return (
      <section data-aos="fade-down">
     
        {getProjectsData().map((project, i) => {
        console.log(project)
          return (
            <Project
              key={i}
              id={project.id}
              className={project.className}
              text={getText(project.text, languageSelected)}
              title={getText(project.title, languageSelected)}
              par={project.par}
              hrefGit={project.hrefGit}
              hrePreview={project.hrefPreview}
              src={project.src}
            />
          );
        })}
    
      </section>
    );
  }
}

export default ProjectsList;
