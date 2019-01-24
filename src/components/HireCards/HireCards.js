import React from "react";
import FontAwesome from "react-fontawesome";
import HireCard from "./../HireCard/HireCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./HireCards.css";
import { CardDeck } from "reactstrap";
const HireCards = () => {
  
  const projects = [{
    id: 1,
    className: 'fas fa-fist-raised',
    text: 'The ability to collaborate with clients and peers is crucial for web development. Respecting the others ideas and space also. Nothing is more rewarding when hard work pays off. Always trying to learn new things or reinforcing what i know.',
    title: 'Hard Worker'
},{
    id: 2,
    className: 'fas fa-heart',
    text: 'Found what you like and let it kill you...well, sound so dramatic but i think the greatest work is done by passion, people that love what they do for a living.',
    title: 'Passionate'
},{
    id: 3,
    className: 'fas fa-fast-forward',
    text: "Never stop being curious. I'm confident in my ability to learn something new and put it into production. ",
    title: 'Fast Learner'
}

];
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

