import React from 'react';
import './Skills.css';
//@ts-ignore
import Fade from 'react-reveal/Fade';
import { skills } from '../skills';

const Skills = () => {
  return (
    <div id="tools" className="album">
      <div className="container">
        <Fade bottom>
          <h2 className="text-center mb-5">Tools & Technologies</h2>
        </Fade>
        <div className="row">
          <Fade bottom>
            {skills.map((skill) => (
              <div
                className="col-lg-2 col-md-3 col-sm-4 col-6 skill"
                key={skill.name}
              >
                <img
                  className="skill-img"
                  src={skill.imgSrc}
                  alt={skill.name}
                />
                <p className="text-muted">{skill.name}</p>
              </div>
            ))}
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Skills;
