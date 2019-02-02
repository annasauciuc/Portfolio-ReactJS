import React, { Component } from "react";
import "./PageNotFound.css";

const PageNotFound = () => {
  return (
    <React.Fragment>
      <body>
        <section id="not-found">
          <div id="title">Simple Pure CSS3 &bull; 404 Error Page</div>
          <div class="circles">
            <p>
              404
              <br />
              <small>PAGE NOT FOUND</small>
            </p>
            <span class="circle big" />
            <span class="circle med" />
            <span class="circle med" />
            <span class="circle small" />
            <span class="circle big" />
          </div>
          <div className="m-5">
            <h1>
              {" "}
              <a
                title="Go Back to Main Page"
                href="/"
                rel="noopener noreferrer"
              >
                <strong>GO BACK TO MAIN PAGE</strong>
              </a>
            </h1>
          </div>
        </section>
      </body>
    </React.Fragment>
  );
};

export default PageNotFound;
