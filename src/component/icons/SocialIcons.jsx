import React from "react";
import { FaInstagram, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si"; // For LeetCode icon
import "./icon.css"; // Optional for additional styling

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <a href="https://www.instagram.com/divyyaaa._05/" target="_blank" rel="noopener noreferrer">
        <FaInstagram style={{ color: "#E4405F", fontSize: "40px" }} />
      </a>
      <a href="www.linkedin.com/in/
divya-k-529393259" target="_blank" rel="noopener noreferrer">
        <FaLinkedin style={{ color: "#0077B5", fontSize: "40px" }} />
      </a>
      <a href="https://github.com/Divya20085" target="_blank" rel="noopener noreferrer">
        <FaGithub style={{ color: "#333", fontSize: "40px" }} />
      </a>
      <a href="https://wa.me/6374939491" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp style={{ color: "#25D366", fontSize: "40px" }} />
      </a>
      <a href="https://leetcode.com/u/Divyakrishnamoorthi/" target="_blank" rel="noopener noreferrer">
        <SiLeetcode style={{ color: "#FFA116", fontSize: "40px" }} />
      </a>
    </div>
  );
};

export default SocialIcons;
