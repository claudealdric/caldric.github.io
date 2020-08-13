import React from 'react';

import AboutMe from './AboutMe';
import Projects from './Projects';
import Skills from './Skills';

const Home: React.FC = () => {
  return (
    <div>
      <AboutMe />
      <Projects />
      <Skills />
    </div>
  );
};

export default Home;
