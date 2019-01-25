import React from "react";

import HireCard from "../HireCard/HireCard";
import "./HireCardsList.css";
import projects from "../../projects";

const HireCardsList = () => {
  console.log("projects :", projects);
  return (
    <div className="row">
      {projects.map((user, i) => {
        return (
          <HireCard
            key={i}
            id={user.id}
            className={user.className}
            text={user.text}
            title={user.title}
          />
        );
      })}
    </div>
  );
};

export default HireCardsList;
