import React from 'react'
import "./Project.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons"; 
import img1 from '../../assets/img1.png';
function Project() {
  return (
    <div>
        <div className="prj">
            <h1>PROJECTS</h1>
        </div>
        <div className="prj-ico">
            <FontAwesomeIcon icon={faStar} size="5x" color="#FFD700" />
        </div>
        <div className="container">
            <div className="prj-c"style={{ backgroundColor: "yellow" }}>
                <div className='imgbx'>
                    <img src={img1}/>
                </div>
                <div className='content1'>
                    <h2>Portfolio</h2>
                    <p>I hold a Bachelor of Technology in 
                        Computer Science from the esteemed Art 
                        University and a Master of Fine Arts in 
                        Interactive Design. </p>
                    <a href='#'>Git Hub</a>
                </div>
            </div>
            <div className="prj-c"style={{ backgroundColor: "yellow" }}>
                <div className='imgbx'>
                    <img src={img1}/>
                </div>
                <div className='content1'>
                    <h2>Portfolio</h2>
                    <p>I hold a Bachelor of Technology in 
                        Computer Science from the esteemed Art 
                        University and a Master of Fine Arts in 
                        Interactive Design. </p>
                    <a href='#'>Git Hub</a>
                </div>
            </div>
            <div className="prj-c" style={{ backgroundColor: "yellow" }}>
                <div className='imgbx'>
                    <img src={img1}/>
                </div>
                <div className='content1'>
                    <h2>Portfolio</h2>
                    <p>I hold a Bachelor of Technology in 
                        Computer Science from the esteemed Art 
                        University and a Master of Fine Arts in 
                        Interactive Design. </p>
                    <a href='#'>Git Hub</a>
                </div>
            </div>
            <div className="prj-c"style={{ backgroundColor: "yellow" }}>
                <div className='imgbx'>
                    <img src={img1}/>
                </div>
                <div className='content1'>
                    <h2>Portfolio</h2>
                    <p>I hold a Bachelor of Technology in 
                        Computer Science from the esteemed Art 
                        University and a Master of Fine Arts in 
                        Interactive Design. </p>
                    <a href='#'>Git Hub</a>
                </div>
            </div>
        </div>
        <div className="spav"></div>
    </div>
  );
}

export default Project
