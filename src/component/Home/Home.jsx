import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faStar } from "@fortawesome/free-solid-svg-icons"; 
import "../Home/Home.css";
import divi from '../../assets/divyaa.png';

function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Function to handle mouse movement
  const handleMouseMove = (e) => {
    setMousePos({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <div onMouseMove={handleMouseMove}>
      <div className="name">
        <h1>DIVYA</h1>
        <h2>KRISHNAMOORTHI</h2>
        <img 
          className="imgg" 
          src={divi} 
          style={{ 
            // Applying slight movement to the image
            transform: `translate(${(mousePos.x - window.innerWidth / 2) * 0.03}px, ${(mousePos.y - window.innerHeight / 2) * 0.03}px)`
          }} 
        />
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
         {/* <div className="cardss">
            <div className="card1">Card1</div>
            <div className="card2">card2</div>
            <div className="card3">card3</div>
            <div className="card4">card4</div>
         </div> */}
         <div className="pr">
            <div className="pr1">
                <p>PROJECTS</p>
            </div>
            <div className="loader1"></div>
            <div className="pcon">
              <div className="tilt-box-wrap1">
                <span className="t_over1"></span>
                <span className="t_over1"></span>
                <span className="t_over1"></span>
                <span className="t_over1"></span>
                <span className="t_over1"></span>
                <span className="t_over1"></span>
                <span className="t_over1"></span>
                <span className="t_over1"></span>
                <span className="t_over1"></span>
                <div className="tilt-box1">
                  <strong>PORTFOLIO</strong>
                </div>
              </div>
              <div className="tilt-box-wrap2">
                <span className="t_over2"></span>
                <span className="t_over2"></span>
                <span className="t_over2"></span>
                <span className="t_over2"></span>
                <span className="t_over2"></span>
                <span className="t_over2"></span>
                <span className="t_over2"></span>
                <span className="t_over2"></span>
                <span className="t_over2"></span>
                <div className="tilt-box2">
                  <strong>PORTFOLIO</strong>
                </div>
              </div>
              <div className="tilt-box-wrap3">
                <span className="t_over3"></span>
                <span className="t_over3"></span>
                <span className="t_over3"></span>
                <span className="t_over3"></span>
                <span className="t_over3"></span>
                <span className="t_over3"></span>
                <span className="t_over3"></span>
                <span className="t_over3"></span>
                <span className="t_over3"></span>
                <div className="tilt-box3">
                  <strong>PORTFOLIO</strong>
                </div>
              </div>
              <div className="tilt-box-wrap4">
                <span className="t_over4"></span>
                <span className="t_over4"></span>
                <span className="t_over4"></span>
                <span className="t_over4"></span>
                <span className="t_over4"></span>
                <span className="t_over4"></span>
                <span className="t_over4"></span>
                <span className="t_over4"></span>
                <span className="t_over4"></span>
                <div className="tilt-box4">
                  <strong>PORTFOLIO</strong>
                </div>
              </div>
            </div>
         </div>
         <div className="hedu">
            <div className="hedu1">
                <p>EDUCATION</p>
            </div>
            <div className="loader2"></div>
            <div className="hclg">
                <h2>Bachelor of Engineering in Computer Science</h2>
                <h3>Kongu Engineering College</h3>
                 <h4>2022-2026</h4> 
                <p>Gained a solid foundation in software development overall. 
                  Focused on building web applications.
                  And acquired fundamental konwoledge of desgining poster with the CGPA 7.8(till 4th sem)</p>

            </div>
            <div className="line"></div>
            <div className="hschl">
                <h2>Higher Secondary in Computer Science</h2>
                <h3>Kongu Vellalar Mat.Hr.Sec School</h3>
                 <h4>2021-2022</h4> 
                <p>I completed my 12th grade  on Computer Science, with a score of 85%. This foundation fueled my passion for technology </p>
                  <p>and programming. It laid the groundwork for my journey into software development and innovation.</p>

            </div>
         </div>
         <div className="sym">
          <h3> ©</h3>
          <h4>copy right reserved by Divya</h4>

         </div>
      </div>
    </div>
  );
}

export default Home;
