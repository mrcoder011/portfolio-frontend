import React from "react";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  const featured = projects.slice(0, 3); // first 3 as featured
  return (
    <>
      <header className="hero">
        <h2>HELLO!</h2>
        <h1>I'm <span style={{color:"#f9a825"}}>Md Shafatullah</span></h1>
        <p>Mechanical (Automobile) Engineer | CAD & CAE Specialist | Proficient in SolidWorks, ANSYS Fluent, and AutoCAD. Experienced in designing and validating practical mechanical systems, with expertise in battery thermal management, FEA simulations, and developing manufacturing-ready models.</p>

        <div style={{marginTop:20}}>
         <a 
  className="btn btn-primary" 
  href="https://drive.google.com/file/d/1FFGfNoJSwnZJjFFNrrXUgmXgrlf9GCV2/view?usp=drive_link" 
  target="_blank" 
  rel="noopener noreferrer"
>
  Download Resume
</a>

          <a className="btn btn-secondary" href="#projects">My Works</a>
        </div>
      </header>

      <section id="projects" className="projects">
        {featured.map((p) => <ProjectCard key={p.id} project={p} />)}
      </section>
    </>
  );
}
