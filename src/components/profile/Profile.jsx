import React from "react";
import "./profile.css";
const Profile = () => {
  return (
    <section id="profile">
      <div className="section__pic-container">
        <img src="./assets/profile-pic.png" alt="John Doe profile picture" />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Jayasurya Karadi</h1>
        <p className="section__text__p2">React Web Developer | Quality Engineer</p>
        <div className="btn-container">
          <a
            target="_blank"
            href="https://drive.google.com/file/d/12Wp4VMfpRJ2Ndd-HcgzL0UMG8nKNkidb/view?usp=sharing"
          >
            <button className="btn btn-color-2">Download CV</button>
          </a>
          <a href="#contact"><button className="btn btn-color-1">Contact Info</button></a>
        </div>
        <div id="socials-container">
          
          <a target="_blank" href="https://github.com/jayasuryakaradi">
            <img
              src="./assets/github.png"
              alt="My Github profile"
              className="icon"
            />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/jayasuryak">
            <img
              src="./assets/linkedin.png"
              alt="My LinkedIn profile"
              className="icon"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Profile;
