import React, { Component } from 'react';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Projects from  './Projects';
import Contact from './Contact';
import './App.scss';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Home  />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App;
