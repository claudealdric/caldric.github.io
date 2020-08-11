import React from 'react';
import './Projects.css';

import { projects } from '../projects';

const Projects: React.FC = () => {
  return (
    <div id="projects">
      <div className="container">
        <hr className="featurette-divider" />
        {projects.map((project, index) => (
          <div className="project" key={project.id}>
            <div className="row featurette">
              <div
                className={index % 2 === 1 ? 'col-md-7 order-md-2' : 'col-md-7'}
              >
                <h3 className="featurette-heading">{project.name}</h3>
                <p className="lead">{project.description}</p>
              </div>
              <div
                className={index % 2 === 1 ? 'col-md-5 order-md-1' : 'col-md-5'}
              >
                <img
                  className="project-preview"
                  src={project.imgSrc}
                  alt={`${project.name} project`}
                />
              </div>
            </div>
            <hr className="featurette-divider" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
