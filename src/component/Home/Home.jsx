import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon
import { faStar } from "@fortawesome/free-solid-svg-icons"; // Import the required icon
import "../Home/Home.css";

function Home() {
  return (
    <div>
      <div className="name">
        <h1>DIVYA</h1>
        <h2>KRISHNAMOORTHI</h2>
      </div>
      <div className="icon">
        {/* FontAwesome Icon */}
        <FontAwesomeIcon icon={faStar} size="5x" color="#FFD700" /> {/* Adjust size and color */}
      </div>
      <div className="intro">
        <p>I'm Divya Krishnamoorthi - Skilled in Front-end development </p>
        <p>and Poster design, creating impactful and user-friendly</p>
        <p> digital experiences</p>
      </div>
      <div className="about">
         <div className="abt">
            <p>ABOUT</p>
         </div>
      </div>
    </div>
  );
}

export default Home;
