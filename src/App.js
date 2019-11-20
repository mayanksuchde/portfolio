import React, { Component } from 'react';
//import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'

import Home from './Home';
import About from './About';
import Skills from './Skills';
import ProjectList from  './ProjectList';
import Contact from './Contact';
import Background from './Background';

import './Styles/App.scss';


class App extends Component {
  state = {
    isMobile: false,
  
  }

  
  componentDidMount=()=>{
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }
  resize() {
    this.setState({isMobile:window.innerWidth<525});
  }


  componentWillUnmount=()=>{
    window.removeEventListener('resize', this.throttledHandleWindowResize);
  }
  render() {
   const {isMobile}=this.state;
    return (
        <div className="App">
          <div className="bg">
            { isMobile ? 
                (
                  <div>
                    <Background top={0} />
                    <Background top={1} />
                    <Background top={2} />
                  </div>
                ) 
                : 
                (<Background top={0} />) }
             
            {/* may be try to put the top padding as a props so we can use it multiple times     */}
            <div className='main'>
              <Home  />
              <About />
              <Skills />
              <ProjectList />
              <Contact />
            </div>
          </div>
          {/* </Parallax> */}
          
          
        </div>
    );
  }
}

export default App;
