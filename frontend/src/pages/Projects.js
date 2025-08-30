import React from "react";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <main className="page">
      <h1 className="page-title">All Projects</h1>
      <section className="projects">
        {projects.map(p => <ProjectCard key={p.id} project={p} />)}
      </section>
    </main>
  );
}
