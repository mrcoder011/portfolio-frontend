import React from "react";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="brand">Md Shafatullah</Link>
      <ul className="nav-list">
        <li><NavLink to="/" end className={({isActive}) => isActive ? "active" : ""}>Home</NavLink></li>
        <li><NavLink to="/about" className={({isActive}) => isActive ? "active" : ""}>About</NavLink></li>
        <li><NavLink to="/experience" className={({isActive}) => isActive ? "active" : ""}>Experience</NavLink></li>
        <li><NavLink to="/projects" className={({isActive}) => isActive ? "active" : ""}>Projects</NavLink></li>
        <li><NavLink to="/contact" className={({isActive}) => isActive ? "active" : ""}>Contact</NavLink></li>
    
      </ul>
    </nav>
  );
}
