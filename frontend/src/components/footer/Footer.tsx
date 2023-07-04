import React, { useState } from "react";
import "./Footer.css";

interface FooterProps {
  onFunModeToggle: (funMode: boolean) => void;
}

const Footer: React.FC<FooterProps> = ({ onFunModeToggle }) => {
  const [funMode, setFunMode] = useState(false);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setFunMode(isChecked);
    onFunModeToggle(isChecked);
  };

  return (
    <div className="footer">
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
    </div>
  );
};

export default Footer;
