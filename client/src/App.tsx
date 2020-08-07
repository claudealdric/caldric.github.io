import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Nav from './components/Nav';

const App = () => {
  return (
    <div>
      <Nav />
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
