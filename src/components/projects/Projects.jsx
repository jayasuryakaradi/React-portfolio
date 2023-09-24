import React, { useEffect, useState } from "react";
import "./projects.css";
import Spinner from "../spinner/Spinner";

const ProjectsCard = ({
  imageUrl,
  projectTitle,
  githubUrl,
  liveWebsiteUrl,
}) => {
  return (
    <div className="project-card border-rounded grow">
      <div className="project-thumbnailPicture">
        <img src={imageUrl} alt={projectTitle} className="project-img" />
      </div>
      <h3 className="project-title">{projectTitle}</h3>
      <div className="project-details flex-wrap-justify-center-align-center">
        <a target="_black" href={githubUrl}>
          <button
            disabled={githubUrl === "private"}
            className={`${
              githubUrl === "private"
                ? "project-btn block-cursor private-repo"
                : "project-btn public-repo"
            }`}
          ></button>
        </a>
        <a target="_black" href={liveWebsiteUrl}>
          <button className="project-btn">Live Demo</button>
        </a>
      </div>
    </div>
  );
};
const Projects = () => {
  const [projects, setProjects] = useState([]);
  const[loading, setLoading]=useState(false)

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true)
      const response = await fetch(
        "https://react-portfolio-c9da0-default-rtdb.firebaseio.com/projects.json"
      );
      const data = await response.json();
      setProjects(data);
    };
    fetchProducts();
  }, []);
  setTimeout(() => {
    setLoading(false);
  }, 2000);
  console.log(projects);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <section className="projects__container">
          <div className="heading">
            <p className="">Browse My Recent</p>
            <h1 className="title">Projects</h1>
          </div>
          <div className="experience-details-container">
            <div className="flex-wrap-justify-center-align-center">
              {projects?.map(
                (project) =>
                  project && (
                    <ProjectsCard
                      key={project?.id}
                      imageUrl={project?.imageUrl}
                      projectTitle={project?.projectTitle}
                      githubUrl={project?.githubUrl}
                      liveWebsiteUrl={project?.liveWebsiteUrl}
                      description={project?.description}
                    />
                  )
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Projects;
