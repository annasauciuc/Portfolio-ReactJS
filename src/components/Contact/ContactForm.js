import React from "react";
import "./Contact.css";

const ContactForm = () => (
  <form
    className="form-signin  mb-5 col-sm-6"
    action="https://formspree.io/sauciuc.anamaria.dd@gmail.com"
    method="POST"
  >
   
      <input
        className="form-control  w-100"
        required
      
        name="email"
        placeholder="Your email"
        type="email"
      />
   
    <textarea
      className="form-control mt-2 w-100"
      minLength="4"
      maxLength="1000"
      placeholder="Leave your message here"
      name="message"
      required
    />
    <button className="btn mt-2  btn-contact shadow    btn-custom btn-lg btn-block" type="submit">
      Send
    </button>
  </form>
);

export default ContactForm;
