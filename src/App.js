import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home';
import StartScreen from './components/StartScreen';

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/startscreen" component={StartScreen} />
        </Switch>
      </Router>
    </div>
  );
}
