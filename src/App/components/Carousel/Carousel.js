import React, { Component } from 'react';
import './Carousel.scss';

import {ReactComponent as UdaciLogo} from './Assets/udacity.svg';

class Carousel extends Component {
  render() {
    return(
      <div id="carouselIndicators" class="carousel slide" data-ride="carousel" data-interval="3000" data-pause="hover">
        <div class="carousel-inner">
          <div class="carousel-item active">
            {/* <UdaciLogo className="udacilogo" alt="First slide" /> */}
            <svg class="placeholder" width="auto" maxWidth="100%" height="auto" macHeight="100%" alt="First slide" ></svg>
          </div>

          <div class="carousel-item">
            {/* <UdaciLogo className="udacilogo" alt="Second slide" /> */}
            <svg class="placeholder" width="auto" maxWidth="100%" height="auto" macHeight="100%" alt="Second slide" />
          </div>

          <div class="carousel-item">
            {/* <UdaciLogo className="udacilogo" alt="Third slide" /> */}
            <svg class="placeholder" width="auto" maxWidth="100%" height="auto" macHeight="100%" alt="Third slide" />
          </div>

        </div>

        <a class="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true" />
          <span class="sr-only">Previous</span>
        </a>

        <a class="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true" />
          <span class="sr-only">Next</span>
        </a>

        <ol class="carousel-indicators">
          <li data-target="#carouselIndicators" data-slide-to="0" class="active" />
          <li data-target="#carouselIndicators" data-slide-to="1" />
          <li data-target="#carouselIndicators" data-slide-to="2" />
        </ol>
      </div>
    )
  }
}

export default Carousel;
