import React from "react";
import "./about.css";

const Card = ({ imageUrl, imageAlt, title, description1, description2 }) => {
  return (
    <div className="details-container">
      <img src={imageUrl} alt={imageAlt} className="icon" />
      <h3>{title}</h3>
      <p>
        {description1} <br />
        {description2}
      </p>
    </div>
  );
};
const About = () => {
  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img
            src="./assets/about-pic.JPEG"
            alt="Profile picture"
            className="about-pic"
          />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <Card
              imageUrl={"./assets/experience.png"}
              imageAlt={"Experience icon"}
              title={"Experience"}
              description1={"1.5+ years"}
              description2={"Quality Engineer"}
            />
            <Card
              imageUrl={"./assets/education.png"}
              imageAlt={"Education icon"}
              title={"Education"}
              description1={" Bachelor of Engineering"}
              description2={""}
            />
          </div>
          <div className="text-container">
            <p>
              An enthusiastic and knowledgeable Engineer looking forward to
              change the working role from quality engineer to front end
              developer to showcase the existing technical skills and develop it
              further in an esteemed organization. I am seeking career
              opportunities to prove my caliber and potential to the fullest in
              a challenging environment and create a positive impact for the
              development of organization and self.
            </p>
          </div>
        </div>
      </div>
      <a href="#experience">
        <img src="./assets/arrow.png" alt="Arrow icon" className="icon arrow" />
      </a>
    </section>
  );
};

export default About;
