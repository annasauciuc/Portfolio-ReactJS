import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import Layout from "./components/Layout/Layout";
import { CardDeck } from "reactstrap";
import HireCards from "./components/HireCards/HireCards";
class App extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    AOS.init({
      duration: 1200
    });
  }

  render() {
    return (
      <div className="App">
        <Layout />
      </div>
    );
  }
}
export default App;
