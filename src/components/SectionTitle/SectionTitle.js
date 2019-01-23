import React, { Component } from "react";



class SectionTitle extends Component {

    constructor(props) {
        super(props)
      
        this.state = {
        }
      }
  renderH1=() =>{
    return <h1></h1>
  }  
  renderH2=() =>{
    const {text,classStyles} = this.props;
    return (
        <h2 className={classStyles} id="" data-aos="fade-right">{text}</h2>
    );
  } 

  renderTitle=()=>{
    const {title} = this.props;
    if (title == "h1"){
        return this.renderH1();
    }else if(title == "h2"){
        return this.renderH2();
    }
  }
  render() {
    return this.renderTitle();
  }
}

export default SectionTitle;