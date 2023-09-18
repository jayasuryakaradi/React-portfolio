import React from 'react'
import './profile.css'
const Profile = () => {
  return (
    <section id="profile">
      <div class="section__pic-container">
        <img src="./assets/profile-pic.png" alt="John Doe profile picture" />
      </div>
      <div class="section__text">
        <p class="section__text__p1">Hello, I'm</p>
        <h1 class="title">Jayasurya Karadi</h1>
        <p class="section__text__p2">React Web Developer | Quality Engineer</p>
        <div class="btn-container">
          <button
            class="btn btn-color-2"
            onclick="window.open('./assets/resume-example.pdf')"
          >
            Download CV
          </button>
          <button class="btn btn-color-1" onclick="location.href='./#contact'">
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <a target="_blank" href='https://www.linkedin.com/in/jayasuryak'><img
            src="./assets/linkedin.png"
            alt="My LinkedIn profile"
            class="icon"
          />
          </a>
          <a target='_blank' href='https://github.com/jayasuryakaradi'><img
            src="./assets/github.png"
            alt="My Github profile"
            class="icon"
            onclick="location.href='https://github.com/'"
          />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Profile
