import React, { Component } from 'react';
import Project from './Project';
import projArr from './projectDetails';
import ProjectMobile from './ProjectMobile';
import throttle from 'lodash.throttle';

export default class ProjectList extends Component {
  
  state = {
    isMobile: false
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
      <div className='projects_container'>
        <h2>Projects</h2>
        {
          isMobile?
            (projArr.map((p,i)=><ProjectMobile details={p} index={i} />))
            :
              <ul>
                {projArr.map((p,i)=><li key={i}><Project details={p} /></li>)}
              </ul>
            
        }
        
        {/* <ProjectMobile /> */}
      </div>
    )
  }
}
