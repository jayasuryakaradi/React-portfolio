import React from "react";
import "./contact.css";
const Contact = () => {
  return (
    <section className="contact__container">
      <div className="heading">
        <p className="section__text__p1">Get in Touch</p>
        <h1 className="title">Contact Me</h1>
      </div>
      <div className="contact-info-upper-container flex-wrap-justify-center-align-center border-rounded">
        <a href="mailto:jayasurya.karadi@gmail.com">
          <div className="contact-info-container border-rounded grow">
            <img
              src="./assets/email.png"
              alt="Email icon"
              className="icon-lg"
            />
            <p>Email</p>
          </div>
        </a>
        <a target="_blank" href="https://in.linkedin.com/in/jayasuryak">
          <div className="contact-info-container border-rounded grow">
            <img
              src="./assets/linkedin.png"
              alt="LinkedIn icon"
              className="icon-lg"
            />
            <p>LinkedIn</p>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Contact;
