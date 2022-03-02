/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Buttons from './Button';
import calculate from './logics/calculate';
import './Calculator.css';

/* eslint-disable class-methods-use-this */
export default function Calculator() {
  const [obj, setObj] = useState({
    total: '0',
    next: null,
    operation: null,
  });

  const updateOperation = ({ next, total, operation }) => {
    if (total || total === null) {
      obj.total = total;
    }
    if (next || next === null) {
      obj.next = next;
    }
    if (operation || operation === null) {
      obj.operation = operation;
    }
    return obj;
  };
  const clickHandler = (e) => {
    const result = calculate(obj, e.target.value);
    const { next, total, operation } = updateOperation(result);
    setObj({ next, total, operation });
  };

  return (
    <div className="calculator_cnt">
      <div>
        <h1>Let's do some Math!</h1>
      </div>
      <div>
        <table>
          <tbody>
            <tr>
              <td colSpan="4" className="display">
                {obj.next === null ? obj.total : obj.next}
              </td>
            </tr>
            <tr>
              <td><Buttons number="AC" clickHandler={clickHandler} /></td>
              <td><Buttons number="+/-" clickHandler={clickHandler} /></td>
              <td><Buttons number="%" clickHandler={clickHandler} /></td>
              <td className="orange"><Buttons number="÷" clickHandler={clickHandler} /></td>
            </tr>
            <tr>
              <td><Buttons number="7" clickHandler={clickHandler} /></td>
              <td><Buttons number="8" clickHandler={clickHandler} /></td>
              <td><Buttons number="9" clickHandler={clickHandler} /></td>
              <td className="orange"><Buttons number="x" clickHandler={clickHandler} /></td>
            </tr>
            <tr>
              <td><Buttons number="4" clickHandler={clickHandler} /></td>
              <td><Buttons number="5" clickHandler={clickHandler} /></td>
              <td><Buttons number="6" clickHandler={clickHandler} /></td>
              <td className="orange"><Buttons number="-" clickHandler={clickHandler} /></td>
            </tr>
            <tr>
              <td><Buttons number="1" clickHandler={clickHandler} /></td>
              <td><Buttons number="2" clickHandler={clickHandler} /></td>
              <td><Buttons number="3" clickHandler={clickHandler} /></td>
              <td className="orange"><Buttons number="+" clickHandler={clickHandler} /></td>
            </tr>
            <tr>
              <td colSpan="2"><Buttons number="0" clickHandler={clickHandler} /></td>
              <td><Buttons number="." clickHandler={clickHandler} /></td>
              <td className="orange"><Buttons number="=" clickHandler={clickHandler} /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
