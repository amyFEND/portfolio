import React, { Component } from 'react';
import './About.scss';

class About extends Component {
  render() {
    const { placeholderTxt } = this.props;

    return(
      <section id="About" className="container-fluid">
        <div className="container">
          <h1>About</h1>
          <p>{placeholderTxt}</p>
        </div>
      </section>
    )
  }
}

export default About;
