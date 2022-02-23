/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import React from 'react';
import Calculator from './components/Calculator.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Calculator />
    );
  }
}
