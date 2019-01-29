import React, { Component } from "react";

import Project from "./Project/Project";
import "./Project/Project.css";
import { getProjectsData } from "./../../services/projects";
import { getText } from "./../../services/translation";

class ProjectsList extends Component {
  constructor(props) {
    super(props);
  }
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
            />
          );
        })}
    
      </section>
    );
  }
}

export default ProjectsList;
