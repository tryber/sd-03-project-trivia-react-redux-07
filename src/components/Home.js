import React, { Component } from 'react';

import logo from '../trivia.png';
import '../App.css';
import ButtonToConfig from './ButtonToConfig';
import LoginArea from './LoginArea';


export default class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>SUA VEZ</p>
          <ButtonToConfig />
          <LoginArea />
        </header>
      </div>
    );
  }
}
