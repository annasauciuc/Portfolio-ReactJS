import React, { Component } from "react";
import AOS from "aos";
import { Route, Switch } from 'react-router-dom';
import "aos/dist/aos.css";
import "./App.css";
import HomePage from './components/HomePage/HomePage'
import ProjectsPage from './components/ProjectsPage/ProjectsPage'
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
    return (
      <Layout>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/projects" component={ProjectsPage} />
      </Switch>
    </Layout>
    );
  }
}
export default App;
