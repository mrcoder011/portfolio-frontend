import React from "react";

export default function Resume() {
  return (
    <main className="page">
      <h1 className="page-title">Resume</h1>
      <div className="resume-frame">
        <object data="/resume.pdf#toolbar=0" type="application/pdf" width="100%" height="100%">
          <p>Cannot display PDF. <a href="/resume.pdf">Download Resume</a></p>
        </object>
      </div>
    </main>
  );
}
