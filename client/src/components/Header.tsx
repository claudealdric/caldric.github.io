import React from 'react';
import Button from 'react-bootstrap/Button';
import './Header.css';

const Header: React.FC = () => {
  return (
    <section className="jumbotron text-center header">
      <div className="background-image"></div>
      <h1>Claude V. Aldric</h1>
      <p>Software Engineer</p>
      <Button variant="primary">Download Resume</Button>
    </section>
  );
};

export default Header;
