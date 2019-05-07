import React, { Component } from 'react';
import './Projects.scss';

import Carousel from '../../components/Carousel/Carousel.js'

class Projects extends Component {
  render() {
    return(
      <section id="Projects" className="container-fluid">
        <div className="container">
          <h1>My Work</h1>
          <div id="project">
            <Carousel />
          </div>
        </div>
      </section>
    )
  }
}

export default Projects;
