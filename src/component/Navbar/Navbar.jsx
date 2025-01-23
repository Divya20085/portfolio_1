import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"; // Import required icons
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      {/* Menu Icon */}
      <div className="menu-icon" onClick={toggleMenu}>
        <FontAwesomeIcon
          icon={isMenuOpen ? faXmark : faBars} // Toggle between bars and X icons
          size="2x" // Adjust size
          color="#ffff" // Icon color
        />
      </div>

      {/* Logo */}
      <div className="logo">D's Portfolio</div>

      {/* Menu Links */}
      <div className={`menu ${isMenuOpen ? "open" : ""}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#education">Education</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
}

export default Navbar;
