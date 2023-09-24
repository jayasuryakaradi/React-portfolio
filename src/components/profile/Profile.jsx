import React from "react";
import "./Profile.css";
const Profile = () => {
  return (
    <div className="profile__container flex-wrap-justify-center-align-center">
      <div className="profile__image-container">
        <img
          src="./assets/profile-pic.png"
          alt=""
          className="profile__profile-pic "
        />
      </div>
      <div className="profile__details-container">
        <p>Hello, I'm</p>
        <h1>Jayasurya Karadi</h1>
        <strong>React Web Developer | Quality Engineer</strong>
        <div className="flex-wrap-justify-center-align-center profile__btn-container">
          <a
            target="_blank"
            href="https://drive.google.com/file/d/12Wp4VMfpRJ2Ndd-HcgzL0UMG8nKNkidb/view?usp=sharing"
            className="btn-1"
          >
            Download CV
          </a>
          <a className="btn-2">Contact Info</a>
        </div>
        <div className="profile__icons-container flex-wrap-justify-center-align-center">
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
      
    </div>
  );
};

export default Profile;
