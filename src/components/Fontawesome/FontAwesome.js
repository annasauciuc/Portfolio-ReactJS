


import React from "react";
import Hire from './../Hire/Hire'
import SectionTitle from './../SectionTitle/SectionTitle'
import './HireCards.css'

const HireCards = props => {
    renderHobbieTitle = () => {
        const { text, styleClass } = this.props;
        console.log(this.props);
        return (
        
            <i className={styleClass} />
          
        );
      };
      render() {
        return this.renderHobbieTitle();
      }
};

export default HireCards;






