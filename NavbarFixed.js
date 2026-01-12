import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">MindCare</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
    
        <Link to="/testimonial" className="cta">Testimonial</Link>
        <Link to="/therapistregistration">Register</Link>
      </div>
    </nav>
  );
}

export default Navbar;
