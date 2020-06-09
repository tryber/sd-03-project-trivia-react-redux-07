import React, { Component } from 'react';
import logo from '../trivia.png';
import '../App.css';
import ButtonToConfig from './ButtonToConfig';

// teste

export default class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>SUA VEZ</p>
          {/* Importar link que leva para StartScreen */}
          <ButtonToConfig />
        </header>
      </div>
    );
  }
}
