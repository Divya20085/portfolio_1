import React from 'react'
import '../Education/edu.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons"; 

function edu() {
  return (
    <div>
        <div className="edu01">
            <h1>EDUCATION</h1>
        </div>
        <div className="ico">
            <FontAwesomeIcon icon={faStar} size="5x" color="#FFD700" />
        </div>
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
        <div className='spav'></div>
    </div>
  )
}

export default edu
