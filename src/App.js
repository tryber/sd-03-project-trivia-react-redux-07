import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home';
import GameScreen from './components/GameScreen';
import ConfigurationScreen from './components/ConfigurationScreen';
import Feedback from './components/Feedback';
import RankingScreen from './components/RankingScreen';


export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/gamepage" component={GameScreen} />
          <Route exact path="/rankingscreen" component={RankingScreen} />
          <Route exact path="/feedback" component={Feedback} />
          <Route exact path="/Configuration" component={ConfigurationScreen} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}
