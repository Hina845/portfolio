"use client"

import { userContext } from "../main.jsx"

import { useState, useContext, use } from "react"
import ProjectCard from "./project-card.jsx"

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null)

  const projects = useContext(userContext)["user-projects"]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-5 mt-5">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          isHovered={hoveredProject === project.id}
          onClick={() => window.open(project.url, '_blank')}
          onHover={() => setHoveredProject(project.id)}
          onLeave={() => setHoveredProject(null)}
        />
      ))}
    </div>
  )
}

export default Projects
