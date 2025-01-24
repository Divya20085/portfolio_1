import React from "react";
import "./About.css"; // Import the CSS file for styling
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons"; 
import { faInstagram, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"; 
import { faCode } from "@fortawesome/free-solid-svg-icons"; // For LeetCode

function About() {
  return (
    <div>
      <div className="abt01">
        <h1>ABOUT</h1>
      </div>
      <div className="ico">
        <FontAwesomeIcon icon={faStar} size="5x" color="#FFD700" />
      </div>
      <div className="photo">
        <div className="abt-icons">
          <a href="https://www.instagram.com/divyyaaa._05/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" className="insta" />
          </a>
          <a href="https://github.com/Divya20085" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" className="git" />
          </a>
          <a href="www.linkedin.com/in/
divya-k-529393259" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" className="link" />
          </a>
          <a href="https://leetcode.com/u/Divyakrishnamoorthi/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faCode} size="2x" className="leet" /> {/* LeetCode */}
          </a>
        </div>
      </div>
      <div className="abt-content-1">
            <p>My passion lies in the intersection of art</p>
            <p>and technology, creating visually</p>
            <p>captivating interfaces and elevating</p>
            <p> overal user digital experiences.</p>
        </div>
        <div className="abt-content-2">
            <p>I'm currently pursuing a Bachelor of Engineering </p>
            <p>in Computer Science at Kongu Engineering College,</p>
            <p>with a CGPA of 7.80 (up to the 4th semester).</p>
            <p>My academic background equips me with a solid</p>
            <p>understanding of computer science fundamentals,</p>
            <p>empowering me to design and implement</p>
            <p>solutions that balance innovation, efficiency, and functionality.</p>
            
         </div>
         <div className="abt-card">
            <div className="card"><h1>JAVA</h1> </div>
            <div className="card"><h1>HTML</h1></div>
            <div className="card"><h1>CSS</h1></div>
            <div className="card"><h1>ReactJS</h1></div>
            <div className="card"><h1>Javascript</h1></div>
            <div className="card"><h1>NodeJs</h1></div>
            <div className="card"><h1>MongoDB</h1></div>
            <div className="card"><h1>CANVA</h1></div>
         </div>
         

    </div>
  );
}

export default About;
