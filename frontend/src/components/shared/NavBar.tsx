import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <ul className="navbar-item first-item">
          <li>
            <Link to="/">Samuel Tay</Link>
          </li>
        </ul>
        <ul>
          <li className="navbar-item">
            <Link to="/experience">Experience</Link>
          </li>
          <li className="navbar-item">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="navbar-item">
            <Link to="/research">Research</Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
