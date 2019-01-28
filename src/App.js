import React, { Component } from "react";
import AOS from "aos";
import ProjectsPage from "./components/ProjectsPage/ProjectsPage";
import HomePage from "./components/HomePage/HomePage";
import "aos/dist/aos.css";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
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

  render() {
    const { languageSelected } = this.props;
    return (
      <div className="App">
      <BrowserRouter>
 
        <Layout>
          <Switch>
            <Route
              languageSelected={languageSelected}
              path="/"
              exact
              component={HomePage}
            />
            <Route
              languageSelected={languageSelected}
              path="/projects"
              component={ProjectsPage}
            />
          </Switch>
        </Layout>
        </BrowserRouter>
 
      </div>
    );
  }
}
export default App;
