import React, { Component } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./App.css";
import Layout from "./components/Layout/Layout";


class App extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    AOS.init({
      duration : 1200
    })
  }
  render(){
    return(
      <div data-aos='fade-up'>
        Helloooo!
      </div>
    )
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
