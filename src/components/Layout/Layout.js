import React, { Component } from "react";

import Navigation from "./../Header/Header";
import Header from "./../Navigation/Navigation";

class Layout extends Component {
  render() {
    return (
      <div>
        <Navigation />

        <Header />
      </div>
    );
  }
}

export default Layout;
