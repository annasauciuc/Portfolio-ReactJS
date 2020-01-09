import React, { Component } from "react";

import Typed from "react-typed";

class Typeed extends Component {
  render() {
    return (
      <Typed
        strings={[ 
          "<h1 class='text-white'> Hi ! <br>I'm Ana Maria</h1>"
        ]}
        typeSpeed={40}
        backDelay={900}
      />
    );
  }
}

export default Typeed;
