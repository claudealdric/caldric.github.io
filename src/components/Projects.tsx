import React from 'react';
import './Projects.css';
//@ts-ignore
import Fade from 'react-reveal/Fade';

import { projects } from '../projects';

const Projects: React.FC = () => {
  return (
    <div id="projects">
      <div className="container">
        <hr className="featurette-divider" />
        {projects.map((project, index) => (
          <div className="project" key={project.name}>
            <div className="row featurette">
              <div
                className={index % 2 === 1 ? 'col-md-7 order-md-2' : 'col-md-7'}
              >
                <Fade bottom>
                  <h3 className="featurette-heading">{project.name}</h3>
                </Fade>
                <Fade bottom distance={'20%'}>
                  <p className="lead">{project.description}</p>
                </Fade>
                <Fade bottom>
                  <div className="external-links">
                    <a
                      href={project.link}
                      className="btn btn-outline-secondary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      App Link
                    </a>
                    <a
                      href={project.github}
                      className="btn btn-outline-secondary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="button-content">
                        <img
                          src="./github.svg"
                          alt={`${project.name} GitHub icon`}
                          width="20"
                          height="20"
                        />
                        GitHub
                      </div>
                    </a>
                  </div>
                </Fade>
              </div>
              <Fade bottom distance={'15%'}>
                <div
                  className={
                    index % 2 === 1 ? 'col-md-5 order-md-1' : 'col-md-5'
                  }
                >
                  <img
                    className="project-preview"
                    src={project.imgSrc}
                    alt={`${project.name} project`}
                  />
                </div>
              </Fade>
            </div>
            <hr className="featurette-divider" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
