import React from "react";

import "./HireCard.css";

const HireCard = props => {
  const { className, text, title } = props;
  return (
    <div className="card col-xs-12 col-sm-6 col-md-4">
      <i className={className} />
      <div className="card-body">
        <h4
          className="card-title font-weight-bold text-center "
          data-aos="fade-right"
        >
          {title}
        </h4>

        <p className="text-justify ">{text}</p>
      </div>
    </div>
  );
};

export default HireCard;
