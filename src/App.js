import React, { Component } from "react";
import AOS from "aos";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "aos/dist/aos.css";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import ProjectsPage from "./components/ProjectsPage/ProjectsPage";
import Layout from "./components/Layout/Layout";
import ScrollArea from "react-scrollbar";
import PageNotFound from './components/PageNotFound/PageNotFound'

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
        <ScrollArea>
          <Layout
            onChangeLanguage={this.onChangeLanguage}
            languageSelected={languageSelected}
          >
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
              <Route
                render={() => (
                 <PageNotFound/>
                )}
              />
            </Switch>
          </Layout>
        </ScrollArea>
      </BrowserRouter>
    );
  }
}
export default App;
