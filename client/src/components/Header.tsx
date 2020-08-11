import React from 'react';
import Button from 'react-bootstrap/Button';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header>
      <h1 className="text-center">Claude V. Aldric</h1>
      <p className="title">Software Engineer</p>
      <Button variant="primary">Download Resume</Button>
    </header>
  );
};

export default Header;
