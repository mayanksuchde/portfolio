import React, { Component } from 'react';
//import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
import Rellax from 'rellax';
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
  componentDidMount=()=>{
    var rellax = new Rellax('.rellax');
  }
  render() {
   
    return (
        <div className="App">
          <div className="bg">
            <div className="parallax p1 rellax" data-rellax-speed="30">
              <SmallSq />
            </div>
            <div className="parallax p2 rellax" data-rellax-speed="20">
              <MedSq />
            </div>
            <div className="parallax p3 rellax" data-rellax-speed="10">
              <LargeSq />
            </div>
          </div>
              
          <div className='main'>
            <Home  />
            <About />
            <Skills />
            <ProjectList />
            <Contact />
          </div>
          {/* </Parallax> */}
          
          
        </div>
    );
  }
}

export default App;
