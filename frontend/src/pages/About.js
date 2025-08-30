import React from "react";

export default function About() {
  return (
    <main className="page">
      <h1 className="page-title">About Me</h1>
      <div className="two-col">
        <div>
          <p>
            I'm <strong>Md Shafatullah</strong>, a Mechanical Engineering student (B.Tech - Automobile) at Aligarh Muslim University.
            I work with SolidWorks, ANSYS (FEA & CFD), AutoCAD and have experience in battery thermal management and shock absorber analysis.
          </p>

          <h3 style={{color:"#fff", marginTop:16}}>Skills</h3>
          <ul style={{color:"#bdbdbd"}}>
            <li>CAD: SolidWorks, AutoCAD</li>
            <li>Simulation: ANSYS (FEA & CFD)</li>
            <li>Manufacturing: CNC Programming, G-code</li>
            <li>Other: Battery Thermal Management, Prototyping</li>
          </ul>

          <div style={{marginTop:16}}>
            <a className="btn btn-primary" href="https://drive.google.com/file/d/1FFGfNoJSwnZJjFFNrrXUgmXgrlf9GCV2/view" target="_blank" rel="noreferrer">View Resume PDF</a>
            <a className="btn btn-secondary" href="/projects">See All Projects</a>
          </div>
        </div>

        <aside className="about-card">
          <h3 style={{color:"#f9a825", marginTop:0}}>Contact</h3>
          <p><strong>Email:</strong> gn2607@myamu.ac.in</p>
          <p><strong>Phone:</strong> 7488663980</p>
          <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/md-shafatullah-6a22541a6/" target="_blank" rel="noreferrer">md-shafatullah</a></p>
        </aside>
      </div>
    </main>
  );
}
