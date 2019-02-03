import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import './Nav.scss';

import {ReactComponent as Logo} from '../../sections/Home/Assets/AmyLogo.svg';

class Nav extends Component {
  render() {
    return(
      <div id="Nav" className="container-fluid">
        <nav className="container">
          <div className="row justify-content-between">
            <div className="col-1">
              <a className="navbar-brand" href="/">
                <Logo id="logo" alt="logo"/>
              </a>
            </div>

            <div className="col-9">
              <div className="navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <Link
                        className="nav-link"
                        activeClass="active"
                        to="Home"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>
                      Home <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                        className="nav-link"
                        activeClass="active"
                        to="About"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                        className="nav-link"
                        activeClass="active"
                        to="Projects"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>
                      Projects
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                        className="nav-link"
                        activeClass="active"
                        to="Contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>
                      Contact
                    </Link>
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
