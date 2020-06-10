import React, { Component } from 'react';
import Header from './Header';
import TestButton from './testButton';
import Quiz from './Quiz';


export default class GameScreen extends Component {
  render() {
    return (
      <div>
        <Header />
        <TestButton />
        <Quiz />
      </div>
    );
  }
}
