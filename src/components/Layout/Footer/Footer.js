import React, { Component } from "react";


class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  renderContactText = () => {
    const { text, classStyles } = this.props;
    return (
      <h2 className={classStyles}>
        <em>{text}</em>
      </h2>
    );
  };

  renderEmail = () => {
    const { title } = this.props;
    return <u>{title}</u>;
  };
  render() {
    return (
        <footer className="py-3 text-center">
        <div className="d-sm-flex">
            <div className="col-md-5 col">
                <blockquote className="" id="footerQuote"> <em> Stay passionate and free and you will thrive, i am sure!</em></blockquote>
            </div>
            <div className="col-md-7 col">
                <a href="#typed"> <button id="floating-action-button" className="btn position-fixed shadow">
               <i className="m-auto fas text-white fa-arrow-up btn-md btnFloat rounded-circle" ></i>
               </button> </a>
                <p className=" ">&copy; 2018 Sauciuc Ana Maria</p>
            </div>
        </div>
    </footer>
    );
  }
}

export default Footer;