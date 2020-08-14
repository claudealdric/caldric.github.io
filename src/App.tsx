// React & Bootstrap
import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Components
import Home from './components/Home';
import NavComponent from './components/NavComponent';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {scrollY > 400 ? <NavComponent /> : null}
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
