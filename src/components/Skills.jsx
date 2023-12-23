// components/Skills.js
import React, { useState } from 'react';
import '../styles/Skills.css';

const skillsData = [
  { id: 1, label: 'HTML', imageName: 'html-logo.png', description: 'HTML is...' },
  { id: 2, label: 'CSS', imageName: 'css-logo.png', description: 'CSS is...' },
  { id: 3, label: 'JavaScript', imageName: 'javascript-logo.png', description: 'JavaScript is...' },
  { id: 4, label: 'NestJS', imageName: 'nest-logo-red.jpg', description: 'NestJS is...' },
  { id: 5, label: 'ReactJS', imageName: 'react-logo.png', description: 'ReactJS is...' },


  // Add more skills data
];

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const handleSkillClick = (id) => {
    const skill = skillsData.find((s) => s.id === id);
    setSelectedSkill(skill);
  };

  return (
    <div id="skills">
      <h2>Skills</h2>
      <div className="skill-container">
        {skillsData.map((skill) => (
          <div key={skill.id} onClick={() => handleSkillClick(skill.id)} className="skill-item">
            <img src={`../resources/${skill.imageName}`} alt={skill.label} />
            <p>{skill.label}</p>
          </div>
        ))}
      </div>
      {selectedSkill && (
        <div className="selected-skill">
          <img src={`../resources/${selectedSkill.imageName}`} alt={selectedSkill.label} />
          <h3>{selectedSkill.label}</h3>
          <p>{selectedSkill.description}</p>
        </div>
      )}
    </div>
  );
};

export default Skills;
