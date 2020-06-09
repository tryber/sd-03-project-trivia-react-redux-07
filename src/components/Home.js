import React, { Component } from 'react';

import logo from '../trivia.png';
import '../App.css';
import TemporaryButton from './TemporaryButton.js';
import TestRequestQuestions from './TestRequestQuestions.js';

export default class Home extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>SUA VEZ</p>
          <TemporaryButton />
          <TestRequestQuestions />
        </header>
      </div>
    );
  }
}
