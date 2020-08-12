import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavComponent: React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark" className="fixed-top">
      <Nav className="container-fluid">
        <Navbar.Brand as={Link} to="#top">
          Claude Aldric
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="#about-me">
            About
          </Nav.Link>
          <Nav.Link as={Link} to="#projects">
            Projects
          </Nav.Link>
          <Nav.Link as={Link} to="#tools">
            Tools
          </Nav.Link>
        </Nav>
      </Nav>
    </Navbar>
  );
};

export default NavComponent;
