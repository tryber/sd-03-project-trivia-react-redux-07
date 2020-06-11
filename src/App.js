import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home';
import GameScreen from './components/GameScreen';
import ConfigurationScreen from './components/ConfigurationScreen';
import RankingScreen from './components/RankingScreen';

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/Configuration" component={ConfigurationScreen} />
          <Route exact path="/" component={Home} />
          <Route exact path="/gamepage" component={GameScreen} />
          <Route exact path="/ranking" component={RankingScreen} />
        </Switch>
      </Router>
    </div>
  );
}
