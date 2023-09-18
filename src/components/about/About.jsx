import React from "react";
import './about.css'
const About = () => {
  return (
    <section id="about">
      <p class="section__text__p1">Get To Know More</p>
      <h1 class="title">About Me</h1>
      <div class="section-container">
        <div class="section__pic-container">
          <img
            src="./assets/about-pic.JPEG"
            alt="Profile picture"
            class="about-pic"
          />
        </div>
        <div class="about-details-container">
          <div class="about-containers">
            <div class="details-container">
              <img
                src="./assets/experience.png"
                alt="Experience icon"
                class="icon"
              />
              <h3>Experience</h3>
              <p>
                1.5+ years <br />
                Quality Engineer
              </p>
            </div>
            <div class="details-container">
              <img
                src="./assets/education.png"
                alt="Education icon"
                class="icon"
              />
              <h3>Education</h3>
              <p>
                Bachelor of Engineering
                <br />
              </p>
            </div>
          </div>
          <div class="text-container">
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
      <a href='#experience'><img
        src="./assets/arrow.png"
        alt="Arrow icon"
        class="icon arrow"
      />
      </a>
    </section>
  );
};

export default About;
