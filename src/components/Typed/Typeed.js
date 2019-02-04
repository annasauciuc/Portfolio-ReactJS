import React, { Component } from "react";

import Typed from "react-typed";

class Typeed extends Component {
  render() {
    return (
      <Typed
        strings={[
          "<span class='text-white'>Hi !</span> ",
          "<span class='text-white'>Hi ! <br>I'm</span> <strong>Ana Maria</strong> "
        ]}
        typeSpeed={40}
        backDelay={900}
      />
    );
  }
}

export default Typeed;
