import React, { Component } from "react";

import Project from "./Project/Project";
import "./Project/Project.css";
import { getProjectsData } from "./../../services/projects";
import { getText } from "./../../services/translation";


class ProjectsList extends Component {
  render() {
    const { languageSelected } = this.props;
    return (
      <section   data-aos="fade-down">
        {getProjectsData().map((project, i) => {
          return (
            <Project
              key={i}
              id={project.id}
              className={project.className}
              text={getText(project.text, languageSelected)}
              title={getText(project.title, languageSelected)}
              par={project.par}
              hrefGit={project.hrefGit}
              hrefPreview={project.hrefPreview}
              src={project.src}
              alt={project.alt}
            />
          );
        })}
      </section>
    );
  }
}

export default ProjectsList;
