import React from "react";

import HireCard from "../HireCard/HireCard";
import "./HireCardsList.css";
import skillsHire from "../../skillsHire";

const HireCardsList = () => {

  return (
    <div className="row">
      {skillsHire.map((user, i) => {
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
