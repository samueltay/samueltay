import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { ScreenSizeContext } from "../screen_size/ScreenSizeContext";
import HamburgerComponent from "./HamburgerComponent";

const Navbar = () => {
  const { windowWidth } = useContext(ScreenSizeContext);
  const navbarLinks = [
    { to: "/experience", label: "Experience" },
    { to: "/projects", label: "Projects" },
    { to: "/research", label: "Research" },
    { to: "/contact", label: "Contact" },
  ];
  const renderedNavbarLinks = navbarLinks.map((link, index) => (
    <li className="navbar-item" key={index}>
      <Link to={link.to}>{link.label}</Link>
    </li>
  ));

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <ul className="navbar-item first-item">
          <li>
            <Link to="/">Samuel Tay</Link>
          </li>
        </ul>
        {windowWidth < 650 ? (
          /* Render hamburger component if on mobile view */
          <HamburgerComponent links={navbarLinks} />
        ) : (
          <ul>{renderedNavbarLinks}</ul>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
