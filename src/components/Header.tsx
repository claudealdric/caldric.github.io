import React from 'react';
import { Link } from 'react-router-dom';
//@ts-ignore
import Fade from 'react-reveal/Fade';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header id="top">
      <Fade bottom>
        <h1 className="text-center">Claude V. Aldric</h1>
      </Fade>
      <Fade bottom delay={1000}>
        <p className="title">Software Engineer</p>
      </Fade>
      <Fade delay={2000}>
        <Link
          className="btn btn-info"
          to="./resume_aldric_claude.pdf"
          target="_blank"
        >
          Resume
        </Link>
      </Fade>
    </header>
  );
};

export default Header;
