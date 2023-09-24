import React from "react";
import "./About.css";

const Card = ({ imageUrl, imageAlt, title, description1, description2 }) => {
  return (
    <div className="card-container border-rounded">
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
    <div className="about__container">
      <div className="heading">
        <p>Get To Know More</p>
        <h1>About Me</h1>
      </div>
      <div className="flex-wrap-justify-center-align-center">
        <img
          src="./assets/about-pic.jpg"
          alt="about-pic"
          className="about-pic"
        />
        <div className="flex-col-wrap-justify-center-align-center">
          <div className="flex-wrap-justify-center-align-center">
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
    </div>
  );
};

export default About;
