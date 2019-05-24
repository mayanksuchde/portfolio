import React, { Component } from 'react';
import {ParallaxProvider,ParallaxBanner} from 'react-scroll-parallax';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import ProjectList from  './ProjectList';
import Contact from './Contact';
import smallSq from './assets/bg/smallrecs.svg'
import medSq from './assets/bg/medrecs.svg'
import largeSq from './assets/bg/largerecs.svg'
import './App.scss';


class App extends Component {
  render() {
   
    return (
        <div className="App">
          <div className='main'>
            <Home  />
            <About />
            <Skills />
            <ProjectList />
            <Contact />
          </div>
          <div className="bg">

          <ParallaxProvider>
            <ParallaxBanner 
                className="parallax"
                layers={[
                  {
                    image: `${smallSq}`,
                    amount: 0.1,
                  },
                  {
                    image: `${medSq}`,
                    amount: -0.4,
                  },
                  {
                    image: `${largeSq}`,
                    amount: -0.8,
                  }   
                ]}
                styles={{
                  postion:"absolute",
                  backgroundSize:"contain"
                }}
                
                >
                {/* <div className="parallax__layer-1"></div>
                <div className="parallax__layer-2"></div>
              <div className="parallax__layer-3"></div> */}
            </ParallaxBanner>
          </ParallaxProvider>
          </div>
        </div>
    );
  }
}

export default App;
