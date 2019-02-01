import React, { Component } from 'react';
import './Nav.scss';

class Nav extends Component {
  render() {
    return(
      <div id="Nav" className="container-fluid">
        <nav className="container">
          <div className="row">
            <div className="col col-md-7 offset-md-4">
              <div className="navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <a className="nav-link"
                       href="/">Home <span
                       className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link"
                       href="#About">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link"
                       href="#Projects">Projects</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link"
                       href="#Contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Nav;
