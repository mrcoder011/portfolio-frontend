import React from "react";

export default function Experience() {
  return (
    <main className="page">
      <h1 className="page-title">Internships & Experience</h1>

      <div style={{display:"grid", gap:16}}>
        <article className="about-card">
          <h3 style={{color:"#f9a825"}}>NIT Patna — Summer Intern (Jun 2025 - Jul 2025)</h3>
          <p>Designed and analyzed internal/external fin structures in PCM using ANSYS for battery thermal management. Achieved ~1.62% reduction in cell temperature by optimizing fins. Worked on meshing and simulation setup.</p>
          <a 
      href="https://drive.google.com/file/d/1EbPHyoo0zjrS1BpxI0Dlg9WMasw26kYn/view?usp=drive_link" 
      target="_blank" 
      rel="noreferrer"
      className="certificate-btn"
    >
      Certificate
    </a>
        </article>

        <article className="about-card">
          <h3 style={{color:"#f9a825"}}>Hitachi Astemo — Summer Trainee (May 2025 - Jun 2025)</h3>
          <p>Analyzed front and rear shock absorber structures, observed assembly/production lines, applied Lean, Six Sigma and Kaizen methodologies for process improvement.</p>
        <a 
      href="https://drive.google.com/file/d/19FJMEI8SpXF0n4YSBJeFT0xAWFyxLwzn/view?usp=drive_link" 
      target="_blank" 
      rel="noreferrer"
      className="certificate-btn"
    >
      Certificate
    </a>
        </article>

        <article className="about-card">
          <h3 style={{color:"#f9a825"}}>SAE-ZHCET Club — Solid Modeling & Chassis Design (Jun 2023 - Jul 2023)</h3>
          <p>Led design & modeling in SolidWorks, focusing on structural integrity and manufacturability. Executive member — guided iterative design and prototyping.</p>
         <a 
      href="https://rocketreach.co/shafatullah-email_521109016" 
      target="_blank" 
      rel="noreferrer"
      className="certificate-btn"
    >
      Profile
    </a>
        </article>
        <article className="about-card">
  <h3 style={{color:"#f9a825"}}>
    I-STEM Volunteer Ambassador — IISc Bengaluru
  </h3>
  <p>
    Selected as an I-STEM Volunteer Ambassador under the I-STEM Program, IISc Bengaluru.  
    Responsibilities include promoting R&D access, leading scientific outreach, and collaborating with institutions to strengthen India’s scientific ecosystem.  
    Participating in the Ambassador Training Program to learn and engage with experts.  
    🙏 Thanks to the I-STEM Team and Ms. Sanjana B for this opportunity.
  </p>
  <a 
    href="https://lnkd.in/gyuzS4qq" 
    target="_blank" 
    rel="noreferrer"
    className="certificate-btn"
  >
    Explore I-STEM
  </a>
</article>

      </div>
    </main>
  );
}
