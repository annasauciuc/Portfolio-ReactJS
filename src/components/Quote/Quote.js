import React, { Component } from "react";
import "./Quote.css";
class Quote extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  renderQuote = () => {
    const { text, classStyles } = this.props;
    return (
      <div className={classStyles}>
        <em>{text}</em>
      </div>
    );
  };

  renderAuthor = () => {
    const { title } = this.props;
    return <u>{title}</u>;
  };
  render() {
    return (
      <section class="quoteSection col">
        <div class="container">
          <div className="col presentation">
            <blockquote
              className="ml-3 mr-3 text-center quote"
              id="codeQuote"
              data-aos="fade-down"
            >
              <em>{this.renderQuote()}</em>
            </blockquote>
            <p
              className="quote h3 text-center"
              id="authorQuote"
              data-aos="fade-down"
            >
              <u>{this.renderAuthor()}</u>
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Quote;
