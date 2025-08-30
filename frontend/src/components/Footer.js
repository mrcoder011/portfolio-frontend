import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div>© {new Date().getFullYear()} Md Shafatullah — Mechanical Engineering Portfolio</div>
      <div style={{marginTop:6, color:"#999"}}>Email: gn2607@myamu.ac.in • Phone: 7488663980</div>
    </footer>
  );
}
