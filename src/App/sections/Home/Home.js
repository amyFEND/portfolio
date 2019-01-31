import React, { Component } from 'react';
import './Home.scss';
import logo from './Assets/AmyLogo.svg';

class Home extends Component {
  render() {
    return(
      <section id="Home" className="">
        <header className="App-header">
          <img src={logo} className="logo" alt="logo" />
          <p>
          Work in Progress
          <span class="one">.</span>
          <span class="two">.</span>
          <span class="three">.</span>
          </p>
        </header>
      </section>
    )
  }
}

export default Home;
