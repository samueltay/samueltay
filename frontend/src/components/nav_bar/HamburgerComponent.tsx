import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

interface LinkItem {
  to: string;
  label: string;
}

interface HamburgerComponentProps {
  links: LinkItem[];
}

const HamburgerComponent: React.FC<HamburgerComponentProps> = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="hamburger-component">
      <div
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={handleToggle}
      >
        {/* Creates the hamburger menu button */}
        <span></span>
        <span></span>
        <span></span>
      </div>
      {isOpen && (
        <ul className="dropdown">
          {links.map((link, index) => (
            <li key={index}>
              <Link to={link.to} onClick={closeMenu}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HamburgerComponent;
