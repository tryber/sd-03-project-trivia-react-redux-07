import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home';
import GameScreen from './components/GameScreen';
import ConfigurationScreen from './components/ConfigurationScreen';

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/Configuration" component={ConfigurationScreen} />
          <Route exact path="/" component={Home} />
          <Route exact path="/gamepage" component={GameScreen} />
            {/* Rota para a tela apos clicar no botão jogar */}
        </Switch>
      </Router>
    </div>
  );
}
