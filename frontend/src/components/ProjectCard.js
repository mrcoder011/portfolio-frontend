import React from "react";

export default function ProjectCard({ project }) {
  return (
    <div className="project-card" aria-label={project.title}>
      
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        {project.video && (
          <video controls style={{width:"100%", borderRadius:8, marginBottom:10}}>
            <source src={project.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}

        <div className="card-footer">
          <a className="btn btn-primary" href={project.link} target="_blank" rel="noreferrer">
            See Project
          </a>
        </div>
      </div>
    </div>
  );
}
