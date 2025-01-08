import React from "react";
import "./About.css";
import profile_pic from "./media/profile_about.png"

function About() {
  return (
    <div className="about">
      <div className="about-content">
        <img 
          src={profile_pic} 
          alt="Profile" 
          className="about-image" 
        />
        <div className="about-text">
          <h1>About Me</h1>
          <p>
          A passionate Java developer with a strong drive for innovation. I enjoy tackling complex challenges and building robust, efficient solutions. I'm constantly learning and exploring new technologies, always seeking ways to improve my skills and contribute to the evolving tech landscape
          </p>
          <ul>
            <li>Name: Piyush Singh</li>
            <li>Date of Birth: 4 November  2003</li>
            <li>Address: Sector 13,Krishna Sadan,Queens road ,Jamshedpur Jharkhad</li>
            <li>Zip code: 620115</li>
            <li>Email: piyushsingh234@gmail.com</li>
            <li>Phone: +91-93471391</li>
          </ul>
          <button className="download-btn">Download CV</button>
        </div>
      </div>
    </div>
  );
}

export default About;
