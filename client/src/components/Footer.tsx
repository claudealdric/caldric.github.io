import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="container">
      <hr />
      <p className="float-right">
        <a href="https://github.com/caldric" target="_blank">
          <img className="contact-icons" src="./github.svg" />
        </a>
        <a href="https://www.linkedin.com/in/caldric/" target="_blank">
          <img className="contact-icons" src="./linkedin.svg" />
        </a>
      </p>
      <p>© Copyright 2020 Claude Aldric. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
