import React from 'react';
import Home from './components/Home';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </Router>
    </div>
  );
}
