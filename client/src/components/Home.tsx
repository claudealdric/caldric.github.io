import React from 'react';
import Card from 'react-bootstrap/Card';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div>
      <h2>About Me</h2>
      <img src="./me.png" alt="My picture" />
      <p>
        I am a lifelong learner who rapidly assimilates complex concepts and
        strives for absolute excellence in my craft. I automatically deconstruct
        and rebuild every idea or system I encounter while asking questions
        like, “What is important,” or “Can this be improved?”
      </p>

      <h2>Portfolio</h2>

      <Card>
        <Card.Img variant="top" src="./covid_dashboard.png" />
        <Card.Body>
          <Card.Title>COVID-19 Dashboard</Card.Title>
          <Card.Text>
            A short description here. Another short description here.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img variant="top" src="./battleship.png" />
        <Card.Body>
          <Card.Title>Battleship</Card.Title>
          <Card.Text>
            A short description here. Another short description here.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img variant="top" src="./pragmatic.png" />
        <Card.Body>
          <Card.Title>Pragmatic</Card.Title>
          <Card.Text>
            A short description here. Another short description here.
          </Card.Text>
        </Card.Body>
      </Card>

      <h2>Skills</h2>
      <ul>
        <li>
          <img className="skills" src="./typescript.svg" alt="TypeScript" />
        </li>
        <li>
          <img className="skills" src="./javascript.svg" alt="JavaScript" />
        </li>
        <li>
          <img className="skills" src="./html5.svg" alt="HTML5" />
        </li>
        <li>
          <img className="skills" src="./css.svg" alt="CSS3" />
        </li>
        <li>
          <img className="skills" src="./python.svg" alt="Python" />
        </li>
        <li>
          <img className="skills" src="./mongodb.svg" alt="MongoDB" />
        </li>
        <li>
          <img className="skills" src="./mysql.svg" alt="MySQL" />
        </li>
        <li>
          <img className="skills" src="./postgresql.svg" alt="PostgreSQL" />
        </li>
        <li>
          <img className="skills" src="./nodejs.svg" alt="Node.js" />
        </li>
        <li>
          <img className="skills" src="./express.svg" alt="Express.js" />
        </li>
        <li>
          <img className="skills" src="./react.svg" alt="React.js" />
        </li>
        <li>
          <img className="skills" src="./jquery.svg" alt="jQuery" />
        </li>
        <li>
          <img className="skills" src="./bootstrap.svg" alt="Bootstrap" />
        </li>
        <li>
          <img className="skills" src="./git.svg" alt="Git" />
        </li>
        <li>
          <img className="skills" src="./github.svg" alt="GitHub" />
        </li>
        <li>
          <img className="skills" src="./vim.svg" alt="Vim" />
        </li>
      </ul>
    </div>
  );
};

export default Home;
