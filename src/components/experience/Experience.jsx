import React, { useEffect, useState } from "react";
import "./Experience.css";
import Spinner from "../spinner/Spinner";
const Skill = ({ skill, level }) => {
  return (
    <div className="skill ">
      <img
        src="./assets/checkmark.png"
        alt="Experience icon"
        className="icon"
      />
      <div>
        <h3>{skill}</h3>
        <p>{level}</p>
      </div>
    </div>
  );
};
const Experience = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const fetchSkills = async () => {
      const response = await fetch(
        "https://react-portfolio-c9da0-default-rtdb.firebaseio.com/skills.json"
      );
      const data = await response.json();
      setSkills(data);
    };
    fetchSkills();
    // setLoading(false);
  }, []);
  setTimeout(() => {
    setLoading(false);
  }, 1000);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="experience__container container">
          <div className="skills__container">
            <div className="heading">
              <p>Explore My</p>
              <h1>Experience</h1>
            </div>

            <div className="details-container border-rounded">
              <h2 className="experience-sub-title ">
                <strong>Frontend Development</strong>
              </h2>
              <div className="skills flex-wrap-justify-center-align-center">
                {skills?.map(
                  (skill) =>
                    skill && (
                      <Skill
                        key={skill?.id}
                        skill={skill?.skill}
                        level={skill?.level}
                      />
                    )
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Experience;
