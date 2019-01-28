import React,{Component} from "react";

import Project from './Project/Project'
import './Project/Project.css'
import {getProjectsData} from './../../services/projects'
import { getText } from "./../../services/translation";

class ProjectsList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { languageSelected } = this.props;
    return (
      <div className="row">
        {getProjectsData().map((user, i) => {
          return (
            <Project
              key={i}
              id={user.id}
              className={user.className}
              text={getText(user.text, languageSelected)}
              title={getText(user.title, languageSelected)}
            />
          );
        })}
      </div>
    );
  }
}

export default ProjectsList;