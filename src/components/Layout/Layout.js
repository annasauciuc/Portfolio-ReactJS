import React, { Component } from "react";
import Navigation from "./../Navigation/Navigation";
import HomePage from "./../HomePage/HomePage";
import ProjectsPage from './../ProjectsPage/ProjectsPage'
import Footer from "./Footer/Footer";


class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      languageSelected: this.props.languageSelected
    };
  }
  onChangeLanguageHandler= (lang) =>{
    const { onChangeLanguage } = this.props;
    onChangeLanguage(lang);
  }
  render() {
    const { languageSelected } = this.props;
    return (
      <div>
        <Navigation languageSelected={languageSelected} onChangeLanguage={this.onChangeLanguageHandler} />
   {this.props.children}
        {/* <HomePage languageSelected={languageSelected} /> */}
        {/* <ProjectsPage languageSelected={languageSelected}/> */}
        <Footer languageSelected={languageSelected} />
      </div>
    );
  }
}

export default Layout;
