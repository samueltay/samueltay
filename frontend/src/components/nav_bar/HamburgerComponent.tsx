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
            <Link to={link.to} onClick={closeMenu}>
              <div
                style={{
                  display: "block",
                  width: "150px",
                  padding: "15px",
                  fontSize: "16px",
                  cursor: "pointer",
                  border: "none",
                }}
              >
                {link.label}
              </div>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HamburgerComponent;
