import React, { Component } from "react";
import AOS from "aos";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "aos/dist/aos.css";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import ProjectsPage from "./components/ProjectsPage/ProjectsPage";
import Layout from "./components/Layout/Layout";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      languageSelected: "eng"
    };
  }

  onChangeLanguage = lang => {
    if (lang == "esp") {
      this.setState({
        languageSelected: "esp"
      });
    } else if (lang == "eng") {
      this.setState({
        languageSelected: "eng"
      });
    }
  };

  componentDidMount() {
    AOS.init({
      duration: 1200
    });
  }

  render() {
    const { languageSelected } = this.state;
    return (
      <BrowserRouter>
        <Layout onChangeLanguage={this.onChangeLanguage}>
          <Switch>
            <Route
              exact
              path="/"
              render={() => <HomePage languageSelected={languageSelected} />}
            />
            <Route
              exact
              path="/projects"
              render={() => (
                <ProjectsPage languageSelected={languageSelected} />
              )}
            />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}
export default App;
