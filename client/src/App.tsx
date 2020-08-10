// React & Bootstrap
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Nav from './components/Nav';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <div>
      <Nav />
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/portfolio">
          <Portfolio />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
