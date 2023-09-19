import React, { useEffect, useState } from "react";
import "./projects.css";

const ProjectsCard = ({
  imageUrl,
  projectTitle,
  githubUrl,
  liveWebsiteUrl,
  description,
}) => {
  return (
    <div className="details-container color-container project-card">
      <div className="article-container image-container">
        <img src={imageUrl} alt={projectTitle} className="project-img" />
      </div>
      <h3 className="experience-sub-title project-title">{projectTitle}</h3>
      <div className="btn-container">
        <a target="_black" href={githubUrl}>
          <button disabled={githubUrl==='private'} className={`${ githubUrl==='private'?"btn btn-color-2 project-btn block-cursor private-repo":"btn btn-color-2 project-btn public-repo"}`}></button>
        </a>
        <a target="_black" href={liveWebsiteUrl}>
          <button className="btn btn-color-2 project-btn">Live Demo</button>
        </a>
      </div>
    </div>
  );
};
const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(()=>{
    const fetchProducts=async()=>{
      const response=await fetch("https://react-portfolio-c9da0-default-rtdb.firebaseio.com/projects.json");
      const data=await response.json()
      setProjects(data)
    }
    fetchProducts()
  },[])
  
  console.log(projects);
  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers display-center">
          {projects?.map((project) => (
            project && <ProjectsCard key={project?.id} 
            imageUrl={project?.imageUrl}
            projectTitle={project?.projectTitle}
            githubUrl={project?.githubUrl}
            liveWebsiteUrl={project?.liveWebsiteUrl}
            description={project?.description}
            />
          ))}
        </div>
      </div>
      <a href="#contact">
        <img src="./assets/arrow.png" alt="Arrow icon" className="icon arrow" />
      </a>
    </section>
  );
};

export default Projects;
