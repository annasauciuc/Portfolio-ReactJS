import React, { Component } from "react";

class Hobbie extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  renderHobbieTitle = () => {
    const { text, styleClass } = this.props;
    console.log(this.props);
    return (
      <p>
        <i className={styleClass} />
        <br />
        <span>{text}</span>
      </p>
    );
  };
  render() {
    return <div data-aos="fade-right">{this.renderHobbieTitle()}</div>;
  }
}

export default Hobbie;
