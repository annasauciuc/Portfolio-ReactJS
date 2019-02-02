import React, { Component } from "react";
import "./PageNotFound.css";

const PageNotFound = () => {
  return (
    <React.Fragment>
      <div className="body">
      
          
          <div className="circles  projectsTitle">
            <p>
              404
              <br />
              <small>PAGE NOT FOUND</small>
            </p>
            <span className="circle big" />
            <span className="circle med" />
            <span className="circle med" />
            <span className="circle small" />
            <span className="circle big" />
            <div className="m-5">
            <button className="btn-lg btn">
              {" "}
              <a
                title="Back to Main Page"
                href="/"
                rel="noopener noreferrer"
              >
                <strong>BACK TO MAIN PAGE</strong>
              </a>
            </button>
          </div>
          </div>
         
       
      </div>
    </React.Fragment>
  );
};

export default PageNotFound;
