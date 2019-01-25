import React from "react";
import SectionTitle from '../SectionTitle/SectionTitle'
import './HireCard.css'
import {
  Card,
  CardTitle,
  CardText,
  CardBody
} from "reactstrap";
const HireCard = props => {
  const { className, text, title } = props;
  return (
  
      <Card>
      <i className={className}></i>
          <CardBody>
            <CardTitle>{title}</CardTitle>

            <CardText>
            {text}
            </CardText>
          </CardBody>
        </Card>
      
  );
};

export default HireCard;
