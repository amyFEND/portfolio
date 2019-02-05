import React, { Component } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import './TopButton.scss';

class TopButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topButton: false,
      intervalId : 0
    }

    this.showTopBtn = this.showTopBtn.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.showTopBtn);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.showTopBtn);
  }

  showTopBtn(e) {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      this.setState({ topButton: true });
    } else {
      this.setState({ topButton: false });
    }
  }

  scrollStep() {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }

  scrollToTop() {
    scroll.scrollToTop();
  };


  render() {
    let { topButton } = this.state;
    return (
      <div>
        {
          topButton &&
          (
            <button
                to="/"
                id="toTop"
                title="Go to top"
                onClick={this.scrollToTop}>
              &#x2191;
            </button>
          )
        }
      </div>
    );
  }
}

export default TopButton;
