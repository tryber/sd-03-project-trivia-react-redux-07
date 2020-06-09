import React, { Component } from 'react';
import Header from './Header';
import Quiz from './Quiz';


export default class GameScreen extends Component {
  render() {
    return (
      <div>
        <Header />
        <Quiz />
      </div>
    );
  }
}
