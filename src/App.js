import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Home from './components/Home';
import GameScreen from './components/GameScreen';
import ConfigurationScreen from './components/ConfigurationScreen';
import Feedback from './components/Feedback';
import Ranking from './components/Ranking';

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Configuration" component={ConfigurationScreen} />
          <Route path="/gamepage" component={GameScreen} />
          <Route path="/feedback" component={Feedback} />
          <Route path="/ranking" component={Ranking} />
        </Switch>
      </Router>
    </div>
  );
}
