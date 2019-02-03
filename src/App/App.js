import React, { Component } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';

// components
import Nav from './components/Nav/Nav';
// import Tracker from './components/Tracker/Tracker';
// import Mobile from './components/Mobile/Mobile';
import TopButton from './components/TopButton/TopButton';

// sections
import Home from './sections/Home/Home';
import About from './sections/About/About';
import Projects from './sections/Projects/Projects';
import Contact from './sections/Contact/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">

        {/* Components */}
        <Nav />
        {/*
          <Tracker />
          <Mobile />
          */}

        {/* Sections */}
        <Home
            id="Home"
        />
        <About
            id="About"
        />
        <Projects
            id="Projects"
        />
        <Contact
            id="Contact"
        />

        <TopButton />
      </div>
    );
  }
}

export default App;
