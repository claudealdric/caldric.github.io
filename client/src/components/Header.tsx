import React from 'react';
import Button from 'react-bootstrap/Button';

const Header: React.FC = () => {
  return (
    <section className="jumbotron text-center">
      <h1>Claude Vergil Aldric</h1>
      <p>Software Engineer</p>
      <Button variant="primary">Download Resume</Button>
    </section>
  );
};

export default Header;
