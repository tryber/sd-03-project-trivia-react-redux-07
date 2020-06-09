import React, { Component } from 'react';

import Header from './Header';
import TestButton from './testButton';


export default class GameScreen extends Component {
  render() {
    return (
      <div>
        <Header />
        <TestButton />
      </div>
    );
  }
}
