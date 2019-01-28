import React, { Component } from "react";
import AOS from "aos";

import "aos/dist/aos.css";
import "./App.css";
import { BrowserRouter } from 'react-router-dom';
import Layout from "./components/Layout/Layout";


class App extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    AOS.init({
      duration: 1200
    });
  }

  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <Layout />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
