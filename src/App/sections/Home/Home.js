import React, { Component } from 'react';
import './Home.scss';
import {ReactComponent as Logo} from './Assets/AmyLogo.svg';

class Home extends Component {
  render() {
    return(
      <section id="Home" className="container-fluid">
        <div className="container">
          <header className="App-header">
            <Logo className="logo" alt="logo" />
            <p>
              Work in Progress
              <span class="one">.</span>
              <span class="two">.</span>
              <span class="three">.</span>
            </p>
          </header>
        </div>
      </section>
    )
  }
}

export default Home;
