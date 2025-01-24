import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faStar } from "@fortawesome/free-solid-svg-icons"; // 
import "../Home/Home.css";

function Home() {
  return (
    <div>
      <div className="name">
        <h1>DIVYA</h1>
        <h2>KRISHNAMOORTHI</h2>
      </div>
      <div className="icon">
        <FontAwesomeIcon icon={faStar} size="5x" color="#FFD700" /> 
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
         <div className="loader"></div>
         <div className="abt1">
            <p>My passion lies in the intersection of art</p>
            <p>and technology, creating visually</p>
            <p>captivating interfaces and elevating</p>
            <p> overal user digital experiences.</p>
         </div>
         <div className="abt2">
            <p>I am pursuing a Bachelor of Engineering </p>
            <p>in Computer Science at Kongu Engineering College,</p>
            <p>with a CGPA of 7.80 (up to the 4th semester).</p>
            <p>My academic background equips me with a solid</p>
            <p>understanding of computer science fundamentals,</p>
            <p>empowering me to design and implement</p>
            <p>solutions that balance innovation, efficiency, and functionality.</p>
            
         </div>
         <div className="cardss">
            <div className="card1">Card1
            </div>
            <div className="card2">
              card2
            </div>
            <div className="card3">
              card3
            </div>
            <div className="card4">
              card4
            </div>
         </div>
         
      </div>
    </div>
  );
}

export default Home;
