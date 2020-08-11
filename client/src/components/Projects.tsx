import React from 'react';
import './Projects.css';

const Projects: React.FC = () => {
  return (
    <div id="projects">
      <div className="container">
        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7">
            <h3 className="featurette-heading">COVID-19 Dashboard</h3>
            <p className="lead">
              Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
              ligula porta felis euismod semper. Praesent commodo cursus magna,
              vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
              commodo.
            </p>
          </div>
          <div className="col-md-5">
            <img
              className="project-preview"
              src="./covid_dashboard.png"
              alt="COVID-19 Dashboard project"
            />
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h3 className="featurette-heading">Battleship</h3>
            <p className="lead">
              Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
              ligula porta felis euismod semper. Praesent commodo cursus magna,
              vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
              commodo.
            </p>
          </div>
          <div className="col-md-5 order-md-1">
            <img
              className="project-preview"
              src="./battleship.png"
              alt="Battleship project"
            />
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7">
            <h3 className="featurette-heading">Pragmatic</h3>
            <p className="lead">
              Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
              ligula porta felis euismod semper. Praesent commodo cursus magna,
              vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
              commodo.
            </p>
          </div>
          <div className="col-md-5">
            <img
              className="project-preview"
              src="./pragmatic.png"
              alt="Pragmatic project"
            />
          </div>
        </div>

        <hr className="featurette-divider" />
      </div>

      {/* <Card>

      <Card>
        <Card.Img variant="top" src="./pragmatic.png" />
        <Card.Body>
          <Card.Title>Pragmatic</Card.Title>
          <Card.Text>
            A short description here. Another short description here.
          </Card.Text>
        </Card.Body>
      </Card> */}
    </div>
  );
};

export default Projects;
