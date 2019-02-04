import React, { Component } from 'react';
import './Contact.scss';

class Contact extends Component {
  render() {
    const { placeholderTxt } = this.props;

    return(
      <section id="Contact" className="container-fluid">
        <div className="container">
          <h1>Contact</h1>
          <p>{placeholderTxt}</p>
        </div>
      </section>
    )
  }
}

export default Contact;
