import React, { useState, useEffect } from 'react';
import './Projects.css';
import weatherAppVideo from './media/weather-app.mp4';
import ecommerceAppVideo from './media/ecommerce-app.mp4';
import fitnessAppVideo from './media/fitness-app.mp4';

function Projects() {
  const projects = [
    {
      title: "Weather App",
      description: "A weather forecasting app with real-time data and a clean, user-friendly interface.",
      video: weatherAppVideo,
    },
    {
      title: "E-commerce App",
      description: "A fully functional e-commerce application with features like cart management and payments.",
      video: ecommerceAppVideo,
    },
    {
      title: "Fitness App",
      description: "A comprehensive fitness tracking app with workout plans, progress tracking, and diet recommendations.",
      video: fitnessAppVideo,
    },
  ];

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isAutoplayEnabled, setIsAutoplayEnabled] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isAutoplayEnabled) {
        setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
      }
    }, 5000); 

    return () => clearInterval(intervalId);
  }, [isAutoplayEnabled, projects.length]);

  const handleProjectChange = (index) => {
    setCurrentProjectIndex(index);
  };

  const toggleAutoplay = () => {
    setIsAutoplayEnabled(!isAutoplayEnabled);
  };

  return (
    <div className="projects">
      <h1 className="projects-heading">My Projects</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <video 
              controls 
              autoPlay={index === currentProjectIndex && isAutoplayEnabled} 
              muted 
              loop 
              className="project-video" 
              onEnded={() => handleProjectChange(index)} 
            >
              <source src={project.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="project-content">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;