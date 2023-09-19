import React, { useEffect, useState } from "react";
const Skill = ({ skill, level }) => {
  return (
    <article>
      <img
        src="./assets/checkmark.png"
        alt="Experience icon"
        className="icon"
      />
      <div>
        <h3>{skill}</h3>
        <p>{level}</p>
      </div>
    </article>
  );
};
const Experience = () => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    const fetchSkills = async () => {
      const response = await fetch(
        "https://react-portfolio-c9da0-default-rtdb.firebaseio.com/skills.json"
      );
      const data = await response.json();
      setSkills(data);
    };
    fetchSkills();
  }, []);
  return (
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Experience</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="experience-sub-title">Frontend Development</h2>
            <div className="article-container">
              {skills?.map((skill) => (
                skill && <Skill key={skill?.id} skill={skill?.skill} level={skill?.level} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <a href="#projects">
        <img src="./assets/arrow.png" alt="Arrow icon" className="icon arrow" />
      </a>
    </section>
  );
};

export default Experience;
