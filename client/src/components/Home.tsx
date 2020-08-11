import React from 'react';
import './Home.css';
import AboutMe from './AboutMe';
import Projects from './Projects';

const Home: React.FC = () => {
  return (
    <div>
      <AboutMe />
      <Projects />

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
