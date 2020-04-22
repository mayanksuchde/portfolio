import React, { Component } from 'react';
import {Home} from './Home/Home.tsx';
import About from './About/About';
import Skills from './Skills/Skills';
import ProjectList from  './Projects/ProjectList';
import Contact from './Contact/Contact';
import Background from './Background';
import ReactLoading from 'react-loading';
import './App.scss';


class App extends Component {
  state = {
    isMobile: false,
    isScreen:"",
    isDone:false,
  }
   
  componentDidMount=()=>{
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();

    setTimeout(() => {
      this.setState({isDone:true})
    }, 1000);
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
   const {isScreen,isDone}=this.state;
   
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
        (!isDone)?
          <div className="loading-screen">
            <ReactLoading type="spinningBubbles" color="#2e9cca" height={90} width={90} />
          </div>
        :
          <div className="App">
            <div className="bg">
              {responsiveBg}
              <div className='main'>
                <Home isScreen={isScreen} />
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
