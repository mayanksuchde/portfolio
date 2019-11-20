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
    isScreen:"",
  }

  
  componentDidMount=()=>{
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }
  resize() {
    this.setState({isMobile:window.innerWidth<525});
    if(window.innerWidth<525){
      this.setState({isScreen:"mobile"})
    }else if(window.innerWidth<800){
      this.setState({isScreen:"tablet"})
    }else{
      this.setState({isScreen:"desktop"})
    }
  }


  componentWillUnmount=()=>{
    window.removeEventListener('resize', this.throttledHandleWindowResize);
  }
  

  render() {
   const {isScreen}=this.state;
   let responsiveBg="";
    if(isScreen==="mobile"){
      responsiveBg=<div>
          <Background top={0} />
          <Background top={1} />
          <Background top={2} />
          <Background top={3} />
        </div>
    }else if(isScreen==="tablet"){
      responsiveBg=<div>
          <Background top={0} />
          <Background top={1} />
          <Background top={1.4} />
          </div>
    }else if(isScreen==="desktop"){
      responsiveBg=<Background top={0} />
    }
    return (
        <div className="App">
          <div className="bg">
            {responsiveBg}
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
