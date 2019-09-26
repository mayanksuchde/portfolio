import React, { Component } from 'react';
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
import Home from './Home';
import About from './About';
import Skills from './Skills';
import ProjectList from  './ProjectList';
import Contact from './Contact';
import {ReactComponent as SmallSq} from './assets/bg/smallrecs.svg'
import {ReactComponent as MedSq} from './assets/bg/medrecs.svg'
import {ReactComponent as LargeSq} from './assets/bg/largerecs.svg'
import './Styles/App.scss';


class App extends Component {
  render() {
   
    return (
        <div className="App">
          <Parallax native className='parallax' pages={5} >
            <ParallaxLayer offset={0} speed={0.1}>
              <SmallSq />
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.5}>
              <MedSq />
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={1}>
              <LargeSq />
            </ParallaxLayer>  
            
            <div className='main'>
              <Home  />
              <About />
              <Skills />
              <ProjectList />
              <Contact />
            </div>
          </Parallax>
        </div>
    );
  }
}

export default App;
