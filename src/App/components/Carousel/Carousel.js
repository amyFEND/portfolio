import React, { Component } from 'react';
import './Carousel.scss';

import Modal from '../Modal/Modal.js';
import {ReactComponent as UdaciLogo} from './Assets/udacity.svg';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }
  render() {
    return(
      <div id="carouselIndicators" className="carousel slide" data-ride="carousel" data-interval="3000" data-pause="hover">
        <div className="carousel-inner">
          <div className="carousel-item active">
            {/* <UdaciLogo className="udacilogo" alt="First slide" /> */}
            <svg className="placeholder" width="auto" maxWidth="100%" height="auto" macHeight="100%" alt="First slide" ></svg>
          </div>

          <div className="carousel-item">
            {/* <UdaciLogo className="udacilogo" alt="Second slide" /> */}
            <svg className="placeholder" width="auto" maxWidth="100%" height="auto" macHeight="100%" alt="Second slide" />
          </div>

          <div className="carousel-item">
            {/* <UdaciLogo className="udacilogo" alt="Third slide" /> */}
            <svg className="placeholder" width="auto" maxWidth="100%" height="auto" macHeight="100%" alt="Third slide" />
          </div>

        </div>

        <a className="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>

        <a className="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>

        <ol className="carousel-indicators">
          <li data-target="#carouselIndicators" data-slide-to="0" className="active" />
          <li data-target="#carouselIndicators" data-slide-to="1" />
          <li data-target="#carouselIndicators" data-slide-to="2" />
        </ol>
      </div>
    )
  }
}

export default Carousel;
