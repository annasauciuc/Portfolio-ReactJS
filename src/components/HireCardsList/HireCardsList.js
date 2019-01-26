import React from "react";

import HireCard from "../HireCard/HireCard";
import "./HireCardsList.css";
import {getHireCards} from './../../services/hire'
import {getText} from './../../services/translation'

const HireCardsList = () => {

  return (
    <div className="row">
      {getHireCards().map((user, i) => {
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
