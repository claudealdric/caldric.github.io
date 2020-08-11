import React from 'react';
import './Skills.css';

import { skills } from '../skills';

const Skills = () => {
  return (
    <div id="skills" className="album">
      <div className="container">
        <h2 className="text-center mb-5">Skills</h2>
        <div className="row">
          {skills.map((skill) => (
            <div className="col-lg-2 col-md-3 col-sm-4 skill" key={skill.id}>
              <img className="skill-img" src={skill.imgSrc} alt={skill.name} />
              <p className="text-muted">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
