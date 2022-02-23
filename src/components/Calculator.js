/* eslint-disable no-unused-vars */
import React from 'react';
import Buttons from './Button';

/* eslint-disable class-methods-use-this */
export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { display: '0' };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler = (e) => {
    this.setState({ display: e.target.value });
  }

  render() {
    return (
      <table>
        <tbody>
          <tr>
            <td colSpan="4" className="display">{this.state.display}</td>
          </tr>
          <tr>
            <td><Buttons number="AC" /></td>
            <td><Buttons number="+/-" /></td>
            <td><Buttons number="%" /></td>
            <td className="orange"><Buttons number="÷" /></td>
          </tr>
          <tr>
            <td><Buttons number="7" /></td>
            <td><Buttons number="8" /></td>
            <td><Buttons number="9" /></td>
            <td className="orange"><Buttons number="*" /></td>
          </tr>
          <tr>
            <td><Buttons number="4" /></td>
            <td><Buttons number="5" /></td>
            <td><Buttons number="6" /></td>
            <td className="orange"><Buttons number="-" /></td>
          </tr>
          <tr>
            <td><Buttons number="1" /></td>
            <td><Buttons number="2" /></td>
            <td><Buttons number="3" /></td>
            <td className="orange"><Buttons number="+" /></td>
          </tr>
          <tr>
            <td colSpan="2"><Buttons number="0" /></td>
            <td><Buttons number="." /></td>
            <td className="orange"><Buttons number="=" /></td>
          </tr>
        </tbody>
      </table>
    );
  }
}
