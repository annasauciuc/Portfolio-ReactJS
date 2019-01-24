import React from "react";
import Hire from './../Hire/Hire'
import SectionTitle from './../SectionTitle/SectionTitle'
import './HireCards.css'

const HireCards = props => {
  return (
    <section className="hireSection">
      <SectionTitle
        text=" Why would you want me in your team ?"
        title="h2"
        classStyles="mt-5 h1 text-center p-5"
      />
      <div className="col-lg-12 d-inline-flex mt-5 col-xl-12 col-md-12 col-xs-12">
        <Hire />
      
      </div>
    </section>
  );
};

export default HireCards;
