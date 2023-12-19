import React from "react";
import { useFetchProject } from "./Fetchproject";

const Project = () => {
  const { loading, project } = useFetchProject();

  if (loading) {
    return (
      <section className="projects">
        <h2>loading...</h2>
      </section>
    );
  }
  return (
    <section className="projects">
      <div className="title">
        <h2>projects</h2>
        <div className="title-underline"></div>
      </div>

      <div className="projects-center">
        {project.map((item) => {
          const { id, url, img, title } = item;
          return (
            <a
              key={id}
              href={url}
              target="_blanck"
              rel="noreferrer"
              className="project"
            >
              <img src={img} alt={title} className="img" />
              <h5>{title} </h5>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Project;
