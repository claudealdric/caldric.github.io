import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Index from './components/Index';
import Portfolio from './components/Portfolio';
import Nav from './components/Nav';

const App = () => {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Index />
        </Route>
        <Route exact path="/portfolio">
          <Portfolio />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
