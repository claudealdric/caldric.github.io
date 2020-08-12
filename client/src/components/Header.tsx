import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header>
      <h1 className="text-center">Claude V. Aldric</h1>
      <p className="title">Software Engineer</p>
      <Link
        className="btn btn-info"
        to="./resume_aldric_claude.pdf"
        target="_blank"
        download
      >
        Download Resume
      </Link>
    </header>
  );
};

export default Header;
