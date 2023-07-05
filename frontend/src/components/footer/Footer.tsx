import React, { useState, useContext } from "react";
import { ScreenSizeContext } from "../screen_size/ScreenSizeContext";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./Footer.css";

interface FooterProps {
  onFunModeToggle: (funMode: boolean) => void;
}

const Footer: React.FC<FooterProps> = ({ onFunModeToggle }) => {
  const [funMode, setFunMode] = useState(false);
  const { windowWidth } = useContext(ScreenSizeContext);

  const hideFunModeToggleWidth = 300;
  const hideFooterTextWidth = 680;

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setFunMode(isChecked);
    onFunModeToggle(isChecked);
  };

  return (
    <div className="footer">
      <div className="social-icons">
        <a
          href="https://www.linkedin.com/in/samueltay96"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="icon" />
        </a>
        <a
          href="https://github.com/samueltay"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="icon" />
        </a>
      </div>

      {windowWidth > hideFooterTextWidth && (
        <p>Built from scratch with React by Samuel Tay</p>
      )}
      {windowWidth > hideFunModeToggleWidth && (
        <div className="slider-container">
          <input
            type="checkbox"
            id="fun-mode-slider"
            className="slider"
            checked={funMode}
            onChange={handleSliderChange}
          />
          <label htmlFor="fun-mode-slider" className="slider-label" />
          <span className="slider-text">Fun Mode</span>
        </div>
      )}
    </div>
  );
};

export default Footer;
