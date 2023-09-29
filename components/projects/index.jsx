import React from "react";
import ProjectCard from "../project-card";

const Projects = ({ title, data }) => {
  return (
    <div className="laptop:mt-10">
      <h1 className="phone:text-xl font-bold laptop:text-3xl mb-5 divider skill-name">
        {title}
      </h1>
      <div className="flex gap-10 flex-wrap justify-center laptop:mt-12">
        {data.map((each, index) => (
          <ProjectCard key={index} {...each} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
