import React from 'react';
//@ts-ignore
import Fade from 'react-reveal/Fade';
import './AboutMe.css';

const AboutMe: React.FC = () => {
  return (
    <section className="jumbotron text-center" id="about-me">
      <div className="container">
        <div className="row">
          <div className="col-md-4 photo-section">
            <Fade bottom distance={'15%'}>
              <img
                src="./me.jpg"
                alt="Claude Aldric"
                className="personal-photo"
              />
            </Fade>
          </div>
          <div className="col-md-8 brand-statement">
            <Fade bottom>
              <h2>About Me</h2>
              <p className="lead text-muted">
                Hello! I am a full-stack software developer who loves building
                apps through Jira and the Agile Scrum framework. I discovered my
                passion for software development late into my college career, so
                I continued with my original major and did a coding bootcamp in
                May 2020 to help transition into the tech industry. I view
                technology as an amplifier of human capabilities and as the key
                to the future, so I am particularly passionate about using it to
                make a positive impact on others.
              </p>
              <p className="lead text-muted">
                I have over 5 years of experience creating software solutions as
                an analyst in the investment industry, where I spearheaded 8
                data analytics and automation projects that saves over 650 hours
                per quarter. I received a bachelor’s degree in mathematics with
                a minor in statistics from Cleveland State University where I
                got a 4.0 GPA and was a Valedictorian Candidate, an Honors
                Program scholar, and an Outstanding Mathematics Major, among
                others. I also received an associate degree in financial
                services from Lorain County Community College where I had a 3.9
                GPA.
              </p>
              <p className="lead text-muted">
                I strive for absolute excellence in my craft. Because of this, I
                am a lifelong learner and I have honed my ability to rapidly
                assimilate complex concepts and skills through all of my past
                experiences, whether through international math competitions,
                snowboarding, juggling, or my academic and work environments. I
                deconstruct and rebuild every idea or system I encounter while
                asking questions like, “What are the key elements?” “How does it
                fit the bigger picture?" or “Can this be improved?"
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
