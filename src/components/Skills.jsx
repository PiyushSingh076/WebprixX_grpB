import React from "react";
import "./Skills.css";

function Skills() {
  const skills = [
    { name: "Java", level: 90 },
    { name: "HTML5", level: 95 },
    { name: "SpringBoot", level: 70 },
    { name: "React", level: 85 },
    { name: "CSS3", level: 90 },
    { name: "GoLang", level: 80 },
  ];

  return (
    <div className="skills">
      <h1>My Skills</h1>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <span>{skill.name}</span>
            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <span>{skill.level}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
