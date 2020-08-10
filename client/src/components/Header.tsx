import React from 'react';
import Button from 'react-bootstrap/Button';

const Header: React.FC = () => {
  return (
    <div className="top-content">
      <h1>Claude Vergil Aldric</h1>
      <p>Software Engineer</p>
      <Button variant="primary">Download Resume</Button>
    </div>
  );
};

export default Header;
