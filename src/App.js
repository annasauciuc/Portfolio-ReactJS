import React, { Component } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIgloo } from "@fortawesome/free-solid-svg-icons";

library.add(faIgloo);

class App extends Component {
  renderH1 = () => {
    return <h1 />;
  };
  renderH2 = () => {
    const { text, classStyles } = this.props;
    return (
      <h2 className={classStyles} id="" data-aos="fade-right">
        {text}
      </h2>
    );
  };

  renderTitle = () => {
    const { title } = this.props;
    if (title == "h1") {
      return this.renderH1();
    } else if (title == "h2") {
      return this.renderH2();
    }
  };

  render() {
    return (
      <div className="App">
        <Layout />
      </div>
    );
  }
}
export default App;
