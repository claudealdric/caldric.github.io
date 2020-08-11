import React from 'react';
import './AboutMe.css';

const AboutMe: React.FC = () => {
  return (
    <section className="jumbotron text-center" id="about-me">
      <div className="container">
        <img src="./me.png" alt="Claude Aldric" className="personal-photo" />
        <h2>About Me</h2>
        <p className="lead text-muted">
          I am a lifelong learner who rapidly assimilates complex concepts and
          strives for absolute excellence in my craft. I automatically
          deconstruct and rebuild every idea or system I encounter while asking
          questions like, “What is important,” or “Can this be improved?”
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
