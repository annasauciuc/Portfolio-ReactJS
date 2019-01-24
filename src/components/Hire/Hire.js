import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Hire.css";
import {
  Card,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody
} from "reactstrap";

const Hire = props => {
  return (
    <div>
      <CardDeck>
        <Card>
          <FontAwesomeIcon icon="igloo" />
          <CardBody>
            <CardTitle>Hard Worker</CardTitle>

            <CardText>
              The ability to collaborate with clients and peers is crucial for
              web development. Respecting the others ideas and space also.
              Nothing is more rewarding when hard work pays off. Always trying
              to learn new things or reinforcing what i know.
            </CardText>
          </CardBody>
        </Card>
        <Card>
          <FontAwesomeIcon icon="igloo" />
          <CardBody>
            <CardTitle>Passionate</CardTitle>
            <CardText>
              This card has supporting text below as a natural lead-in to
              additional content.
            </CardText>
          </CardBody>
        </Card>
        <Card>
          <FontAwesomeIcon icon="igloo" />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </CardText>
          </CardBody>
        </Card>
      </CardDeck>
      <CardDeck>
        <Card>
          <FontAwesomeIcon icon="igloo" />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CardText>
          </CardBody>
        </Card>
        <Card>
          <FontAwesomeIcon icon="igloo" />
          <CardBody>
            <CardTitle>Card title</CardTitle>

            <CardText>
              This card has supporting text below as a natural lead-in to
              additional content.
            </CardText>
          </CardBody>
        </Card>
        <Card>
          <FontAwesomeIcon icon="igloo" />
          <CardBody>
            <CardTitle>Card title</CardTitle>

            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </CardText>
          </CardBody>
        </Card>
      </CardDeck>
    </div>
  );
};

export default Hire;
