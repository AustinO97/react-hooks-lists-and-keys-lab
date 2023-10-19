import React from "react";
import ProjectItem from "./ProjectItem";
import user from "../data/user";

function ProjectList({ projects }) {

  const projectsComp = projects.map(obj => {
    return <ProjectItem key={obj.id} name={obj.name} about={obj.about} technologies={obj.technologies}/>
  })
  console.log(projectsComp);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectsComp}</div>
    </div>
  );
}

export default ProjectList;
