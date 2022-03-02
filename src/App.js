/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Calculator from './components/Calculator';
import Quote from './components/Quote.js';
import Home from './components/Home.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <header>
          <h1>
            Math Magician
          </h1>
          <nav>
            <ul>
              <li>
                <Link to="/" className="link">Home</Link>
              </li>
              <li>
                <Link to="/calculator" className="link">Calculator</Link>
              </li>
              <li>
                <Link to="/quote" className="link">Quote</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/calculator">
            <Calculator />
          </Route>
          <Route path="/quote">
            <Quote />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  }
}
