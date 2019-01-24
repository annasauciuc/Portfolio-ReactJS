import React from "react";
import FontAwesome from "react-fontawesome";
import HireCard from "./../HireCard/HireCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./HireCards.css";
import { CardDeck } from "reactstrap";
import projects from './../../projects'
const HireCards = () => {

console.log("projects :", projects);
  return (
    <CardDeck>
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
      </CardDeck>
  );
};

export default HireCards;

