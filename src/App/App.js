import React, { Component } from 'react';
import logo from './AmyLogo.svg';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="logo" alt="logo" />
          <p>
            Work in Progress
            <span class="one">.</span>
            <span class="two">.</span>
            <span class="three">.</span>
          </p>
        </header>
      </div>
    );
  }
}

export default App;
